import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {HeaderComponent} from '../shared';
import {ModalManagerService} from '../shared/services/modal-manager.service';
import {AddContactComponent} from './contacts/add-contact/add-contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormContactService} from './contacts/form-contact.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AddContactComponent
  ],
  entryComponents:[
    AddContactComponent
  ],
  providers:[ModalManagerService, FormContactService]
})
export class LayoutModule { }
