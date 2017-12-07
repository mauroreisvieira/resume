import * as React from 'react';
import { FooterComponent } from './layout/FooterComponent';
import { HeaderComponent } from './layout/HeaderComponent';
import { OptionsComponent } from './layout/OptionsComponent';
import { SideBarComponent } from './layout/SideBarComponent';

import { EducationComponent } from './EducationComponent';
import { EmploymentComponent } from './EmploymentComponent';
import { ProfileComponent } from './ProfileComponent';
import { SkillComponent } from './SkillComponent';

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
                <main className='main'>
                    <ProfileComponent />
                    <EmploymentComponent />
                    <EducationComponent />
                    <SkillComponent />
                </main>
            </div>
        );
    }
}
