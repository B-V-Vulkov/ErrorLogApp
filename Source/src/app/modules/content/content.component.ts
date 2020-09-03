import { Component, OnInit } from '@angular/core';
import { ErrorLogResponseModel } from 'src/app/core/services/models/error-log/error-log-response-model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorLogModalComponent } from './error-log-modal/error-log-modal.component';
import { RequestHeaderResponseModel } from 'src/app/core/services/models/error-log/request-header-response-model';
import { ErrorLogService } from 'src/app/core/services/error-log.service';
import { ErrorLogListingResponseModel } from 'src/app/core/services/models/error-log/error-log-listing-response-model';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {


    public errorLogs: Array<ErrorLogListingResponseModel>;


    public requestHeaders: Array<RequestHeaderResponseModel> = new Array<RequestHeaderResponseModel>();

    public applications: any;
    public selectedApplication: any;

    public dropdownVisibility: boolean;

    public tabType: number;

    constructor(
        private errorLogService: ErrorLogService,
        private modalService: NgbModal) { }

    test(errorLog: ErrorLogResponseModel) {
        const modalRef = this.modalService.open(ErrorLogModalComponent, { size: 'lg' });
        modalRef.componentInstance.errorLog = errorLog;
    }

    ngOnInit() {
        this.tabType = 1;

        this.applications = [
            { id: 0, name: "Електронен дневник" },
            { id: 1, name: "Лични картони" }
        ];

        this.selectedApplication = this.applications[0];

        var data: any = { applicationId: 1 };

        this.errorLogService.getErrorLogList(data).subscribe(response => { this.errorLogs = response; });

    }

    selectApplication(id: number) {
        this.selectedApplication = this.applications[id];
        this.dropdownVisibility = false;
    }

    showOrHideDropdown() {
        this.dropdownVisibility = !this.dropdownVisibility;
    }




}
