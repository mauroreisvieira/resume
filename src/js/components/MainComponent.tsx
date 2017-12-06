import * as React from 'react';
import { EducationComponent } from './EducationComponent';
import { EmploymentComponent } from './EmploymentComponent';
import { ProfileComponent } from './ProfileComponent';
import { SkillComponent } from './SkillComponent';

export class MainComponent extends React.Component {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <main className='main'>
                <ProfileComponent />
                <EmploymentComponent />
                <EducationComponent />
                <SkillComponent />
            </main>
        );
    }
}
