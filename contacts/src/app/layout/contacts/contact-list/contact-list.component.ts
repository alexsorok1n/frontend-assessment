import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from '../../../shared/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls:['./contact-list.component.scss']
})
export class ContactListComponent {

  @Input() contactList:Array<Contact>;
  @Output() removeContact: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public onRemoveContact(id:string):void {
    this.removeContact.emit(id);
  }
}
