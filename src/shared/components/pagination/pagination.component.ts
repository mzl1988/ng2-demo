import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-pagination-component',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
    @Input() maxSize: number;
    @Input() itemsPerPage: number;
    @Input() totalItems: number;
    @Input() currentPage: number;
    @Input() hasPageBox = true;
    @Input() hasToPageBox = true;
    totalPage: number;
    numPages = 0;
    searchText = '1';
    searchTextStream: Subject<string> = new Subject<string>();

    @Output() changeEvent = new EventEmitter<any>();

    constructor() {
        this.searchTextStream
        .debounceTime(1000)
        .distinctUntilChanged()
        .subscribe(searchText => {
            if (searchText.length > 0) {
                if (Number(searchText) > this.totalPage) {
                    this.searchText = String(this.currentPage);
                } else {
                    this.currentPage = Number(searchText);
                }
            }
        });
    }

    ngOnInit() {
        this.maxSize = Number(this.maxSize);
        this.itemsPerPage = Number(this.itemsPerPage);
        this.totalItems = Number(this.totalItems);
        this.currentPage = Number(this.currentPage);
    }

    searchChanged($event) {
        this.searchText = this.searchText.replace(/[^0-9-]+/, '');
        this.searchTextStream.next(this.searchText);
    }

    ngOnChanges() {
        this.totalPage = this.totalItems % this.itemsPerPage === 0 ? this.totalItems / this.itemsPerPage : Math.ceil(this.totalItems / this.itemsPerPage);
    }

    pageChanged(event: any) {
        this.searchText = String(event.page);
        let page = {
            numPages: this.numPages,
            currentPage: event.page
        };
        this.changeEvent.emit(page);
    }

}
