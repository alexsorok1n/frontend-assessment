import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../shared/models/contact.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormContactService} from '../form-contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(private form: FormBuilder,
              private formContactService:FormContactService,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm():void {
    this.contactForm = this.form.group({
      firstName: this.form.control('', [Validators.required]),
      lastName: this.form.control('', [Validators.required]),
      phone: this.form.control('', this.formContactService.validatePhoneNumber()),
      email: this.form.control('', this.formContactService.validateEmail())
    })
  }

  public createContact():void {
    const contact: Contact = this.formContactService.createNewContact(this.contactForm.value);
    this.activeModal.close(contact);
  }
}
