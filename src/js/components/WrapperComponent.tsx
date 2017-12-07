import * as React from 'react';
import { FooterComponent } from './layout/FooterComponent';
import { HeaderComponent } from './layout/HeaderComponent';
import { OptionsComponent } from './layout/OptionsComponent';
import { MainComponent } from './MainComponent';
import { SideBarComponent } from './layout/SideBarComponent';

export class WrapperComponent extends React.Component {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <div className='wrapper'>
                <HeaderComponent />
                <SideBarComponent />
                <OptionsComponent />
                <MainComponent />
            </div>
        );
    }
}
