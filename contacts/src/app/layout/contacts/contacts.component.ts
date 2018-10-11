import {Component, OnInit} from '@angular/core';
import {ContactService} from './contacts.service';
import {Contact} from '../../shared/models/contact.model';
import {ModalManagerService} from '../../shared/services/modal-manager.service';
import {AddContactComponent} from './add-contact/add-contact.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public pageTitle: string = 'Contact Profile';
  public contacts: Array<Contact> = [];

  constructor(private modalService: ModalManagerService,
    private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  public addContact():void{
    const modalRef = this.modalService.openModal(AddContactComponent, {size: 'lg'});
    modalRef.result.then((data) => {
      this.contactService.createContact(data);
    });
  }

  public removeContact(id: string): void {
    this.contactService.removeContact(id);
  }

}
