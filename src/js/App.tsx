import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MainComponent } from './components/MainComponent';
import {SkillComponent} from './components/SkillComponent';

import '../scss/pages/app.scss';

export default class App {

    constructor () {
        this.init();
    }

    public init(): void {
        ReactDOM.render(
            <MainComponent />,
            document.body
        );
    }
}
new App();
