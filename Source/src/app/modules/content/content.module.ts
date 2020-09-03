import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { LayoutsModule } from 'src/app/core/layouts/layouts.module';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorLogModalComponent } from './error-log-modal/error-log-modal.component';

@NgModule({
    declarations: [
        ContentComponent,
        ErrorLogModalComponent],
    imports: [
        CommonModule,
        ContentRoutingModule,
        LayoutsModule,
        NgbModule,
        NgbModalModule
    ],
    entryComponents: [
        ErrorLogModalComponent
    ]
})
export class ContentModule { }
