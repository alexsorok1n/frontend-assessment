import { Injectable } from "@angular/core";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class ModalManagerService {

  constructor(private modalService: NgbModal) {}

  openModal(content, options:Object = {}): NgbModalRef {
    options['centered'] = true;
    return this.modalService.open(content, options);
  }
}
