import * as React from 'react';

export class OptionsComponent extends React.Component  {
    public state: any;

    constructor (props: any) {
        super(props);
    }

    public handleKeyPress(event: any): void {
        console.log(event.target.value);
        if (event.key === 'Enter') {
            console.log('enter press here!');
        }
    }

    public render(): any {
        return (
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
                                defaultValue='Senio Front end Developer'
                                onKeyUp={this.handleKeyPress}
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
        );
    }
}
