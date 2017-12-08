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
                        <h4>Personal Information</h4>
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
                        <div className='form__field col-large-12'>
                            <label htmlFor='fieldMessage' className='form__label'>
                                Message
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
