import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let $: any;

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, OnDestroy {
    addForm: FormGroup;
    maxSize = 5;
    itemsPerPage = 10;
    totalItems = 300;
    currentPage = 1;
    numPages = 0;
    addModalRef: BsModalRef;
    jc: any;

    constructor(
        private modalService: BsModalService,
        private fb: FormBuilder,
    ) {

    }

    ngOnInit() {
        this.addForm = this.fb.group({
            name: [
                '',
                [Validators.required, Validators.minLength(1), Validators.maxLength(16)]
            ],
            remark: [
                '',
                [Validators.maxLength(50)]
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

    toAdd(form) {
        console.log(form);
    }

    toDelete() {
        this.jc = $.confirm({
            icon: 'fa fa-question-circle',
            title: '删除？',
            content: `将要删除“一级管理员”`,
            type: 'red',
            draggable: true,
            buttons: {
                deleteButton: {
                    text: '确定',
                    btnClass: 'btn-blue',
                    action: () => {
                    }
                },
                cancelButton: {
                    text: '取消',
                    action: () => {
                    }
                }
            }
        });
    }

    ngOnDestroy() {
        try {
            this.jc.close();
        } catch (error) {

        }
    }

}
