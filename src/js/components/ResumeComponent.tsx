import * as React from 'react';

import { FooterComponent } from './layout/FooterComponent';
import { HeaderComponent } from './layout/HeaderComponent';
import { OptionsComponent } from './layout/OptionsComponent';
import { MainComponent } from './MainComponent';

export class ResumeComponent extends React.Component {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <div className='wrapper'>
                <HeaderComponent />
                <OptionsComponent />
                <MainComponent />
                <FooterComponent />
            </div>
        );
    }
}
