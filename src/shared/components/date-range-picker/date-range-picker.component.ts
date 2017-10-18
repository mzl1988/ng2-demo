import { Component, ElementRef, EventEmitter, OnInit, OnChanges, Input, Output } from '@angular/core';
declare let $: any;

@Component({
    selector: 'daterangepicker',
    template: '<input type="text" class="form-control" value="" placeholder="选择日期"/>'
})
export class DateRangePickerComponent implements OnInit, OnChanges {
    @Input() width;
    @Input() startDate = null;
    @Input() endDate = null;
    @Input() options = {};
    @Input() readOnly = false;

    @Output() startDateChange = new EventEmitter();
    @Output() endDateChange = new EventEmitter();

    private el: ElementRef;
    private inputElem: any;
    private initialized = false;

    constructor(el: ElementRef) {
        this.el = el;
    }

    ngOnInit() {
        this.inputElem = this.el.nativeElement.getElementsByTagName('input')[0];
        this.initPicker();
    }

    private initPicker() {
        if (this.width) {
            $(this.inputElem).width(this.width);
        }
        let dateRangePickerOptions: any = this.options;
        if (this.startDate) {
            dateRangePickerOptions.startDate = this.startDate;
        }
        if (this.endDate) {
            dateRangePickerOptions.endDate = this.endDate;
        }
        $(this.inputElem).daterangepicker(dateRangePickerOptions, (start, end, label) => this.onUpdate(start, end, label));

        if (!dateRangePickerOptions.autoUpdateInput) {
            $(this.inputElem).on('apply.daterangepicker', function (ev, picker) {
                if (!dateRangePickerOptions.singleDatePicker) {
                    $(this).val(picker.startDate.format(picker.locale.format) + picker.locale.separator + picker.endDate.format(picker.locale.format));
                } else {
                    $(this).val(picker.startDate.format(picker.locale.format));
                }
            });

            $(this.inputElem).on('cancel.daterangepicker', (ev, picker) => {
                $(this.inputElem).val('');
                this.onUpdate(null, null, null);
            });

            $(this.inputElem).on('input propertychange', () => {
                if ($(this.inputElem).val() === '') {
                    this.onUpdate(null, null, null);
                }
            });
        }

        this.initialized = true;
    }

    ngOnChanges() {
        if (!this.initialized) { return; }

        if (this.startDate) {
            $(this.inputElem).data('daterangepicker').setStartDate(this.startDate);
        } else {
            $(this.inputElem).val('');
        }

        if (this.endDate) {
            $(this.inputElem).data('daterangepicker').setEndDate(this.endDate);
        } else {
            $(this.inputElem).val('');
        }
    }

    onUpdate(start, end, label) {
        this.startDate = start;
        this.endDate = end;
        this.startDateChange.emit(this.startDate);
        this.endDateChange.emit(this.endDate);
    }
}