import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WrapperComponent } from './components/WrapperComponent';
import '../scss/app.scss';

export default class App {
    constructor () {
        this.init();
    }

    public init(): void {
        ReactDOM.render(
            <WrapperComponent />,
            document.body
        );
    }
}
new App();
