import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from './contacts.component';
import {ContactsRoutingModule} from './contacts-routing.module';
import {ContactService} from './contacts.service';
import {ContactListComponent} from './contact-list/contact-list.component';


@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsComponent,
    ContactListComponent,

  ],
  providers: [ContactService]
})
export class ContactsModule {
}
