import { Component, OnInit } from '@angular/core';
import { ErrorLogResponseModel } from 'src/app/core/services/models/error-log/error-log-response-model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorLogModalComponent } from './error-log-modal/error-log-modal.component';
import { RequestHeaderResponseModel } from 'src/app/core/services/models/error-log/request-header-response-model';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {


    public errorLogs: Array<ErrorLogResponseModel> = new Array<ErrorLogResponseModel>();


    public requestHeaders: Array<RequestHeaderResponseModel> = new Array<RequestHeaderResponseModel>();

    public applications: any;
    public selectedApplication: any;

    public dropdownVisibility: boolean;

    public tabType: number;

    constructor(private modalService: NgbModal) { }

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

        //const dsd: ErrorLogResponseModel = {date: new Date("2019-01-16"), userId: "29999943", schoolId: "12ds121212", exception: "1212"};

        this.requestHeaders.push(
            {
                name: "Cache-Control",
                value: "no-cache"
            },
            {
                name: "Connection",
                value: "keep-alive"
            }
        );
        
        this.errorLogs.push(
            {
                date: new Date("2020-09-01T11:14:01.0405622+03:00"),
                statusCode: 401,
                userId: "201061",
                schoolId: "2999983",
                exception: "Invalid Token",
                innerException: "Procedure or function 'ExamUpdate' expects parameter '@SessionId', which was not supplied.",
                controllerName: "Exam",
                actionName: "UpdateExamAsync",
                requestUrl: "http://api2.dnevnik.as/api/Exam/UpdateExam",
                stackTrace: "at ClassBook.Services.DapperService.<ExecuteFirstAsync>d__0`1.MoveNext() in \\10.10.0.11\www\Classbook\Classboo",
                requestPeyload: '{"RowId":6562,"CurrentYear":2019,"StudentId":"3731B641-94D5-4E78-AC91-EFD63C4ECEB5","ClassId":804,"ExamTypeId":1,"SessionId":1,"SubjectId":1,"SubjectTypeId":101,"CalendarDate":"2020-08-04T00:00:00.000Z","Term":null,"OrderNo":"111111","OrderDate":"2020-08-18T00:00:00.000Z","MarkValue":999,"Notes":null}',
                requestHeaders: this.requestHeaders
            });

        console.log(this.errorLogs[0].requestHeaders[0]);
    }

    selectApplication(id: number) {
        this.selectedApplication = this.applications[id];
        this.dropdownVisibility = false;
    }

    showOrHideDropdown() {
        this.dropdownVisibility = !this.dropdownVisibility;
    }




}
