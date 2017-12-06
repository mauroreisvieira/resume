import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ResumeComponent } from './components/ResumeComponent';

import '../scss/pages/app.scss';

export default class App {

    constructor () {
        this.init();
    }

    public init(): void {
        ReactDOM.render(
            <ResumeComponent />,
            document.body
        );
    }
}
new App();
