import { Component, OnInit } from '@angular/core';
import { ErrorLogResponseModel } from 'src/app/core/services/models/error-log/error-log-response-model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorLogModalComponent } from './error-log-modal/error-log-modal.component';
import { RequestHeaderResponseModel } from 'src/app/core/services/models/error-log/request-header-response-model';
import { ErrorLogService } from 'src/app/core/services/error-log.service';
import { ContentService } from 'src/app/core/services/content.service';
import { ErrorLogListingResponseModel } from 'src/app/core/services/models/error-log/error-log-listing-response-model';
import { ApplicationResponseModel } from 'src/app/core/services/models/content/application-response-model';
import { TimeDurationResponseModel } from 'src/app/core/services/models/content/time-duration-response-model';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

    public applications: Array<ApplicationResponseModel>;
    public selectedApplication: ApplicationResponseModel;

    public timeDurations: Array<TimeDurationResponseModel>;
    public selectedTimeDuration: TimeDurationResponseModel;

    public selectedSchoolId: string;
    public selectedUserId: String;

    public errorLogs: Array<ErrorLogListingResponseModel> = new Array<ErrorLogListingResponseModel>();
    public requestHeaders: Array<RequestHeaderResponseModel> = new Array<RequestHeaderResponseModel>();
    public dropdownVisibility: boolean;
    public tabType: number;

    constructor(
        private errorLogService: ErrorLogService,
        private contentService: ContentService,
        private modalService: NgbModal) { }

    ngOnInit() {

        this.contentService.getApplications().subscribe(response => {
            this.applications = response;

            if (this.applications.length !== 0) {
                this.selectedApplication = this.applications[0];
            }

            this.contentService.getTimeDurationDropdown().subscribe(response2 => {
                this.timeDurations = response2;

                if (this.timeDurations.length !== 0) {
                    this.selectedTimeDuration = this.timeDurations[0];
                }

                this.initializeErrorLogTable();
            });
        });
    }

    selectApplication(application: ApplicationResponseModel) {
        this.selectedApplication = application;
        this.initializeErrorLogTable();
    }

    selectTimeDuration(timeDurationId: number) {
        this.selectedTimeDuration = this.timeDurations.find(x => x.id == timeDurationId);
        this.initializeErrorLogTable();
    }

    selectSchoolId(schoolId: string) {
        this.selectedSchoolId = schoolId;
        this.initializeErrorLogTable();
    }

    selectUserId(userId: string) {
        this.selectedUserId = userId;
        this.initializeErrorLogTable();
    }

    initializeErrorLogTable() {
        const data: any = {
            applicationId: this.selectedApplication.id,
            timeDurationId: this.selectedTimeDuration.id
        };

        this.errorLogService.getErrorLogList(data).subscribe(response => {

            console.log(response);

            if (this.selectedSchoolId) {
                response = response.filter(x => x.schoolId.toUpperCase().includes(this.selectedSchoolId.toUpperCase()));
            }
            if (this.selectedUserId) {
                response = response.filter(x => x.userId === this.selectedUserId);
            }

            console.log(this.selectedSchoolId);
            console.log(this.selectedUserId);

            console.log(response);
            console.log(this.errorLogs);

            this.errorLogs = response;

            console.log(this.errorLogs);
        });
    }

    test(errorLog: ErrorLogResponseModel) {
        const modalRef = this.modalService.open(ErrorLogModalComponent, { size: 'lg' });
        modalRef.componentInstance.errorLog = errorLog;
    }
}
