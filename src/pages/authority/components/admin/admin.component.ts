import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    addForm: FormGroup;
    passwordForm: FormGroup;
    maxSize = 5;
    itemsPerPage = 10;
    totalItems = 300;
    currentPage = 1;
    numPages = 0;

    addModalRef: BsModalRef;
    passwordModalRef: BsModalRef;
    constructor(
        private modalService: BsModalService,
        private fb: FormBuilder,
    ) {

    }

    ngOnInit() {
        this.addForm = this.fb.group({
            username: [
                '',
                [Validators.required, Validators.minLength(1), Validators.maxLength(16)]
            ],
            password: [
                '',
                [Validators.required, Validators.minLength(1), Validators.maxLength(16)]
            ],
            confirmPassword: [
                '',
                [Validators.required, Validators.minLength(1)]
            ],
            departmentId: [
                '',
                [Validators.required, Validators.minLength(1)]
            ],
            roleId: [
                '',
                [Validators.required, Validators.minLength(1)]
            ]
        });
        this.passwordForm = this.fb.group({
            password: [
                '',
                [Validators.required, Validators.minLength(1), Validators.maxLength(16)]
            ],
            confirmPassword: [
                '',
                [Validators.required, Validators.minLength(1)]
            ]
        });
    }

    pageChanged(page: any): void {
        this.currentPage = page.currentPage;
        console.log(this.currentPage);
    }

    openModal(template: TemplateRef<any>) {
        this.addModalRef = this.modalService.show(template, { backdrop: false });
        this.addForm.reset();
    }

    openPasswordModal(template: TemplateRef<any>) {
        this.passwordModalRef = this.modalService.show(template, { backdrop: false });
        this.passwordForm.reset();
    }

    toAdd(form) {
        console.log(form);
    }

}
