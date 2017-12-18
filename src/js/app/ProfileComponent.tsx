import * as React from 'react';
import '../../scss/theme/profile.scss';
import User from './../model/User';

export class ProfileComponent extends React.Component {
    public user: User;
    public state: any = {};

    constructor (props: any) {
        super(props);
        this.user = new User('Mauro Reis Vieir', 27);
        this.state = {
            postionApplying: 'Senior Front end Developer',
            name: this.user.name
        };

        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(event: any): void {
        console.log(event);
        this.setState({postionApplying: event.target.value});
    }

    public render(): any {
        return (
            <div className='content'>
                <aside className='aside'>
                    <form action='' className='form mt-0'>
                        <div className='row'>
                            <div className='col-large-12'>
                                <div className='aside__header'>
                                    <h4 className='text-right'>Personal Information</h4>
                                    <span className='uppercase small'>Write your personal information to blá blá blá</span>
                                </div>
                            </div>
                            <div className='form__field col-large-12'>
                                <label htmlFor='postionApplying' className='form__label'>
                                    Position you are applying for
                                </label>
                                <input id='postionApplying'
                                    type='text'
                                    defaultValue={this.state.postionApplying}
                                    onKeyUp={this.handleChange}
                                    className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-6'>
                                <label htmlFor='firstName' className='form__label'>
                                    First Name
                                </label>
                                <input id='firstName' type='text' defaultValue='Mauro' placeholder='' className='form__input form__label--large' />
                            </div>
                             <div className='form__field col-large-6'>
                                <label htmlFor='lastName' className='form__label'>
                                    Last Name
                                </label>
                                <input id='lastName' type='text' defaultValue='Reis Vieira' placeholder='' className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-6'>
                                <label htmlFor='phoneNumber' className='form__label'>
                                    Phone Number
                                </label>
                                <input id='phoneNumber' type='text' defaultValue='917771054' placeholder='' className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-6'>
                                <label htmlFor='fieldEmail' className='form__label'>
                                    Email
                                </label>
                                <input id='fieldEmail' type='text' defaultValue='mauroreisvieira@gmail.com' placeholder='' className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-6'>
                                <label htmlFor='fieldBirth' className='form__label'>
                                    Place of birth
                                </label>
                                <input id='fieldBirth' type='text' defaultValue='Tomar' placeholder='' className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-6'>
                                <label htmlFor='fieldDateBirth' className='form__label'>
                                    Date of birth
                                </label>
                                <input id='fieldDateBirth' type='text' defaultValue='1990-06-01' placeholder='' className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-6'>
                                <label htmlFor='fieldDriving' className='form__label'>
                                    Driving License
                                </label>
                                <input id='fieldDriving' type='text' defaultValue='A e A1, B e B1 (SA – 195984 5)' placeholder='' className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-6'>
                                <label htmlFor='fieldNationality' className='form__label'>
                                    Nationality
                                </label>
                                <input id='fieldNationality' type='text' defaultValue='Portuguese' placeholder='' className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-6'>
                                <label htmlFor='fieldCity' className='form__label'>
                                    City
                                </label>
                                <input id='fieldCity' type='text' defaultValue='Leiria' placeholder='' className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-6'>
                                <label htmlFor='fieldCode' className='form__label'>
                                    Postal Code
                                </label>
                                <input id='fieldCode' type='text' defaultValue='2410-112' placeholder='' className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-6'>
                                <label htmlFor='fieldAddress' className='form__label'>
                                    Address
                                </label>
                                <input id='fieldAddress' type='text' defaultValue='Rua João Paulo II LT.4 3º E' placeholder='' className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-6'>
                                <label htmlFor='fieldCountry' className='form__label'>
                                    Country
                                </label>
                                <input id='fieldCountry' type='text' defaultValue='Portugal' placeholder='' className='form__input form__label--large' />
                            </div>
                            <div className='form__field col-large-12'>
                                <label htmlFor='fieldMessage' className='form__label'>
                                    Professional Summary
                                </label>
                                <textarea id='fieldMessage' className='form__textarea' rows={6}>
                                    I'm a Portuguese developer, fascinated by web development, who likes what they do. I love to learn, and share my knowledge, in order to enrich my portfolio. I'm an "Apple Fanboy", as well as a Sublime Text evangelist (I love this text editor for code).
                                </textarea>
                            </div>
                            <div className='form__actions col-large-6'>
                                <button className='button button--large button--info'>Save Changes</button>
                            </div>
                        </div>
                    </form>
                </aside>
                <main className='main'>
                    <div className='app-profile'>
                        <div className='row'>
                            <div className='col-large-9'>
                                <h1 className='x-large semibold'>
                                    Mauro Reis Vieira <br />
                                    <span className='thin medium'>{this.state.postionApplying}</span>
                                </h1>
                            </div>
                            <div className='col-large-3 text-right'>
                                <div>
                                    <img src='https://pbs.twimg.com/profile_images/913828202832973826/1WWUHoo5_400x400.jpg' className='w-7 h-7 circle text-right' />
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
                </main>
            </div>
        );
    }
}
