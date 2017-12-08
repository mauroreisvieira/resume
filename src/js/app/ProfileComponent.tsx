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
                    <div className='col-large-9'>
                        <h1 className='x-large semibold'>
                            Mauro Reis Vieira <br />
                            <span className='thin medium'>Senio Front end Developer</span>
                        </h1>
                    </div>
                    <div className='col-large-3 text-right'>
                        <div>
                            <img src="https://pbs.twimg.com/profile_images/913828202832973826/1WWUHoo5_400x400.jpg" className='w-7 h-7 circle text-right' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-large-2'>
                        <ul className='list text-salmon uppercase'>
                            <li className='list__item'>
                                <p>Address</p>
                            </li>
                            <li className='list__item'>
                                <p>Email</p>
                            </li>
                            <li className='list__item'>
                                <p>Nationality</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-large-4'>
                        <ul className='list'>
                            <li className='list__item'>
                                <p>Rua João Paulo II LT.4 3º E</p>
                            </li>
                            <li className='list__item'>
                                <p>mauroreisvieira@gmail.com</p>
                            </li>
                            <li className='list__item'>
                                <p>Portuguese</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-large-2'>
                        <ul className='list text-salmon uppercase'>
                            <li className='list__item'>
                                <p>Phone</p>
                            </li>
                            <li className='list__item'>
                                <p>Date / Place of Birth</p>
                            </li>
                            <li className='list__item'>
                                <p>Driving License</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-large-4'>
                        <ul className='list'>
                            <li className='list__item'>
                                <p>917771054</p>
                            </li>
                            <li className='list__item'>
                                <p>1990-06-01 / Tomar</p>
                            </li>
                            <li className='list__item'>
                                <p>A e A1, B e B1 (SA – 195984 5)</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-large-4'>
                        <h5 className='x-bold'>Professional Summary</h5>
                     </div>
                    <div className='col-large-8 offset-large-4'>
                        <p>I'm a Portuguese developer, fascinated by web development, who likes what they do. I love to learn, and share my knowledge, in order to enrich my portfolio. I'm an "Apple Fanboy", as well as a Sublime Text evangelist (I love this text editor for code).</p>
                    </div>
                </div>
            </div>
        );
    }
}
