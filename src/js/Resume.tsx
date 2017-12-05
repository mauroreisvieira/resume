import * as React from 'react';
import * as ReactDOM from 'react-dom';

import User from './model/User';

import { FooterComponent } from './components/layout/FooterComponent';
import { HeaderComponent } from './components/layout/HeaderComponent';
import { MenuComponent } from './components/layout/MenuComponent';

import {SkillComponent} from './components/SkillComponent';

import '../scss/pages/resume.scss';

export default class Dashboard {
    public user: User;

    constructor () {
        this.user = new User('Mauro', 27);
        this.init();
    }

    public init(): void {

        ReactDOM.render(
            <HeaderComponent />,
            document.getElementById('header')
        );
        ReactDOM.render(
            <MenuComponent />,
            document.getElementById('sidenav')
        );

        ReactDOM.render(
            <SkillComponent  name={this.user.name} age={this.user.age} />,
            document.getElementById('profile')
        );

        ReactDOM.render(
            <FooterComponent />,
            document.getElementById('footer')
        );
    }
}
new Dashboard();