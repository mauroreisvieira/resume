import * as React from 'react';
import User from './../model/User';
import '../../scss/theme/profile.scss';

export class ProfileComponent extends React.Component {
    public user: User;

    constructor (props: any) {
        super(props);
        this.user = new User('Mauro Reis Vieir', 27);
    }

    public render(): any {
        return (
            <div className='app-profile'>
                <div className='row'>
                    <div className='col-large-4'>
                        <h5 className='x-bold'>Profile</h5>
                     </div>
                    <div className='col-large-8'>
                        <p>I'm a Portuguese developer, fascinated by web development, who likes what they do. I love to learn, and share my knowledge, in order to enrich my portfolio. I'm an "Apple Fanboy", as well as a Sublime Text evangelist (I love this text editor for code).</p>
                    </div>
                </div>
            </div>
        );
    }
}
