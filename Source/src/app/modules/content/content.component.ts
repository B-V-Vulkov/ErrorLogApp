import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ErrorLogService } from 'src/app/core/services/error-log.service';
import { ContentService } from 'src/app/core/services/content.service';
import { ErrorLogListingResponseModel } from 'src/app/core/services/models/error-log/error-log-listing-response-model';
import { ApplicationResponseModel } from 'src/app/core/services/models/content/application-response-model';
import { TimeDurationResponseModel } from 'src/app/core/services/models/content/time-duration-response-model';
import { ErrorLogResponseModel } from 'src/app/core/services/models/error-log/error-log-response-model';
import { ErrorLogModalComponent } from './error-log-modal/error-log-modal.component';

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
    public selectedUserId: string;

    public errorLogs: Array<ErrorLogListingResponseModel> = new Array<ErrorLogListingResponseModel>();
    public selectedErrorLog: ErrorLogResponseModel;

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

            if (this.selectedSchoolId) {
                response = response.filter(x => x.schoolId.toUpperCase().startsWith(this.selectedSchoolId.toUpperCase()));
            }
            if (this.selectedUserId) {
                response = response.filter(x => x.userId.toUpperCase().startsWith(this.selectedUserId.toUpperCase()));
            }

            this.errorLogs = response;
        });
    }

    openErrorLogModal(errorLogId: string) {

        const data: any = {
            errorLogId: errorLogId
        };

        this.errorLogService.getErrorLog(data).subscribe(response => {
            this.selectedErrorLog = response;

            const modalRef = this.modalService.open(ErrorLogModalComponent, { size: 'lg' });
            modalRef.componentInstance.errorLog = this.selectedErrorLog;

        });
    }
}
