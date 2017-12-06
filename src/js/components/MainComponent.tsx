import * as React from 'react';

import { FooterComponent } from './layout/FooterComponent';
import { HeaderComponent } from './layout/HeaderComponent';

import { ProfileComponent } from './ProfileComponent';

export class MainComponent extends React.Component {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <main className='wrapper'>
                <HeaderComponent />
                <ProfileComponent />
                <FooterComponent />
            </main>
        );
    }
}
