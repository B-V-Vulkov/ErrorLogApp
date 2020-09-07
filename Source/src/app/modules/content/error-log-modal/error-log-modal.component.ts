import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ErrorLogResponseModel } from 'src/app/core/services/models/error-log/error-log-response-model';

@Component({
    selector: 'app-error-log-modal',
    templateUrl: './error-log-modal.component.html',
    styleUrls: ['./error-log-modal.component.scss']
})
export class ErrorLogModalComponent implements OnInit {

    @Input() errorLog: ErrorLogResponseModel;

    constructor(private activeModal: NgbActiveModal,) { }

    ngOnInit() {
    }

    closeModal() {
        this.activeModal.dismiss();
    }
}
