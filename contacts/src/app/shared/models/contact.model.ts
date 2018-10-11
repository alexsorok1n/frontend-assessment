export class Contact {
  public name: string;
  public phone:string;
  public email:string;

  constructor(user:ContactFormModel){
    this.name = (user.firstName + ' ' || '') + user.lastName || '';
    this.phone = user.phone || '';
    this.email = user.email || '';
  }
}

export class ContactFormModel {
  firstName: string;
  lastName: string;
  phone:string;
  email:string;
}
