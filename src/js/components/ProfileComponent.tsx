import * as React from 'react';
import User from './../model/User';

export class ProfileComponent extends React.Component {
    public user: User;

    constructor (props: any) {
        super(props);
        this.user = new User('Mauro', 27);
    }

    public render(): any {
        return (
            <div className='content'>
                <h2>Profile</h2>
                <p><strong>Name:</strong> { this.user.name }</p>
                <p><strong>Age:</strong> { this.user.age }</p>
            </div>
        );
    }
}
