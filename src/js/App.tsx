import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { WrapperComponent } from './app/WrapperComponent';

import '../scss/app.scss';

export default class App {
    constructor () {
        this.init();
    }

    public init(): void {
        ReactDOM.render(
            <BrowserRouter>
                <WrapperComponent />
            </BrowserRouter>,
            document.getElementById('app')
        );
    }
}

new App();
