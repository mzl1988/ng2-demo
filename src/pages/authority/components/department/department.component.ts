import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.scss']
})

export class DepartmentComponent implements OnInit {
    list = [
        {
            id: 'root', name: '珠海市公安局', code: '010001', parentid: null, level: 1, open: true, children: [
                {
                    id: 'sub_1', name: '香洲分局', code: '010002', parentid: 'root', level: 2, open: true, children: [
                        { id: 'sub_1_1', name: '柠溪派出所', code: '010003', parentid: 'sub_1', level: 3, open: true, children: [] },
                        { id: 'sub_1_2', name: '朝阳派出所', code: '010004', parentid: 'sub_1', level: 3, open: true, children: [] },
                        { id: 'sub_1_3', name: '东风派出所', code: '010005', parentid: 'sub_1', level: 3, open: true, children: [] },
                        { id: 'sub_1_4', name: '前山派出所', code: '010006', parentid: 'sub_1', level: 3, open: true, children: [] }
                    ]
                },
                {
                    id: 'sub_2', name: '斗门分局', code: '010007', parentid: 'root', level: 2, open: true, children: [
                        { id: 'sub_2_1', name: '金湾派出所', code: '010008', parentid: 'sub_2', level: 3, open: true, children: [] },
                        { id: 'sub_2_2', name: '井岸派出所', code: '010009', parentid: 'sub_2', level: 3, open: true, children: [] }
                    ]
                }
            ]
        }
    ];

    constructor(
    ) {

    }

    ngOnInit() {

    }
}
