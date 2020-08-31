import { Component, OnInit } from '@angular/core';
import { cwd } from 'process';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})



export class ContentComponent implements OnInit {

    public applications: any;
    public selectedApplication: any;

    public dropdownVisibility: boolean;

    public tabType: number;

    constructor() { }

    ngOnInit() {
        this.tabType = 1;

        this.applications = [
            { id: 0, name: "Електронен дневник" },
            { id: 1, name: "Лични картони" }
        ];

        this.selectedApplication = this.applications[0];


    }

    selectApplication(id: number) {
        this.selectedApplication = this.applications[id];

        console.log(this.selectedApplication);
    }

    showOrHideDropdown() {
        this.dropdownVisibility = !this.dropdownVisibility;
    }
}
