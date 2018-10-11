import {Contact} from '../../shared/models/contact.model';
import {Validators} from '@angular/forms';

export class FormContactService {
  public validatePhoneNumber() {
    return [Validators.required, Validators.pattern('\\d{3}[\\-]\\d{3}[\\-]\\d{4}'),
      Validators.minLength(12), Validators.maxLength(12)]
  }

  public validateEmail() {
    return [Validators.required,
      Validators.email,
      Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
    ]
  }

  public createNewContact(data) {
    return new Contact(data);
  }
}
