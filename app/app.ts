import 'zone.js';
import 'reflect-metadata';

import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';

// Annotation section
@Component({
    selector: 'app'
})
@View({
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
