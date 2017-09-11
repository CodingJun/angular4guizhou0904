import {Component, OnInit} from '@angular/core';
import {AppOutput} from '../header/header.component';

@Component({
    selector: 'app-app-store',
    templateUrl: './app-store.component.html',
    styleUrls: ['./app-store.component.css']
})
export class AppStoreComponent implements OnInit {
    private _current = 1;
    public title: String = '应用商城';
    public childTitle: String;
    appOutput: AppOutput = new AppOutput('', 0);
    private tabs = [
        {
            index: 1,
            name: '我的应用',
            tabName: 'myApp'
        },
        {
            index: 2,
            name: '公共应用',
            tabName: 'publicApp'
        }
    ];
    buyHandler(event: AppOutput) {
        this.appOutput = event;
    }

    titleHandler(event: any) {
        this.childTitle = event;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
