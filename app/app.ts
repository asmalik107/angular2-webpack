require('zone.js/dist/zone');
import 'reflect-metadata';

import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

// Annotation section
@Component({
    selector: 'app',
    template: '<h1>Hello {{ name }}</h1>'
})
// Component controller
class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Asim';
    }
}
bootstrap(MyAppComponent);
