import { Component, OnInit } from '@angular/core';
import { cwd } from 'process';
import { ErrorLogResponseModel } from 'src/app/core/services/models/error-log/error-log-response-model';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';



@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})



export class ContentComponent implements OnInit {


    public errorLogs: Array<ErrorLogResponseModel> = new Array<ErrorLogResponseModel>();

    public applications: any;
    public selectedApplication: any;

    public dropdownVisibility: boolean;

    public tabType: number;

    constructor(   ) { }

    ngOnInit() {
        this.tabType = 1;

        this.applications = [
            { id: 0, name: "Електронен дневник" },
            { id: 1, name: "Лични картони" }
        ];

        this.selectedApplication = this.applications[0];

        //const dsd: ErrorLogResponseModel = {date: new Date("2019-01-16"), userId: "29999943", schoolId: "12ds121212", exception: "1212"};

        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token's Parameter" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invadsdsdsdsdlid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token's Parameter" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invadsdsdsdsdlid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token's Parameter" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invadsdsdsdsdlid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token's Parameter" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invadsdsdsdsdlid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid Token" });        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token's Parameter" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invadsdsdsdsdlid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Missing Token's Parameter" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invadsdsdsdsdlid User Contract" });
        this.errorLogs.push({ date: new Date("2020-09-01T11:14:01.0405622+03:00"), response: 401, userId: "201061", schoolId: "2999983", exception: "Invalid Token" });

    }

    selectApplication(id: number) {
        this.selectedApplication = this.applications[id];
        this.dropdownVisibility = false;
    }

    showOrHideDropdown() {
        this.dropdownVisibility = !this.dropdownVisibility;
    }

}
