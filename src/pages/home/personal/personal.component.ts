import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
declare let $: any;
declare let echarts: any;

@Component({
    selector: 'app-home-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss']
})
export class HomePersonalComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('chartElement') chartElement: ElementRef;
    chart: any;

    constructor(
        public ngZone: NgZone
    ) {
        window.onresize = (e) => {
            ngZone.run(() => {
                // ECharts3中的图表大小自适应
                try {
                    this.chart.resize();
                } catch (error) {

                }
            });
        };
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.chart = echarts.init(this.chartElement.nativeElement);
        this.initChart();
    }

    ngOnDestroy() {
        this.chart.dispose();
    }

    initChart() {
        let option = {
            color: ['#3292E0'],
            tooltip: {},
            radar: {
                name: {
                    textStyle: {
                        color: '#777777'
                    }
                },
                indicator: [
                    { name: '3+X', max: 6500 },
                    { name: '体能', max: 16000 },
                    { name: '专业技能', max: 30000 },
                    { name: '技能', max: 38000 },
                    { name: '笔试', max: 52000 }
                ]
            },
            series: [{
                type: 'radar',
                data: [
                    {
                        value: [4300, 10000, 28000, 35000, 50000],
                        name: '警种全局排名'
                    }
                ]
            }]
        };
        this.chart.setOption(option);
    }

}
