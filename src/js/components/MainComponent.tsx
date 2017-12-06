import * as React from 'react';

import { EmploymentComponent } from './EmploymentComponent';
import { ProfileComponent } from './ProfileComponent';

export class MainComponent extends React.Component {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <main className='main'>
                <ProfileComponent />
                <EmploymentComponent />
            </main>
        );
    }
}
