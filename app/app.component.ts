
import {Component} from '@angular/core';

// Annotation section
@Component({
    selector: 'app',
    template: '<h1>Start {{ test }}</h1>'
})
// Component controller
export class AppComponent {
    test: string;

    constructor() {
        this.test = 'Test';
    }
}
