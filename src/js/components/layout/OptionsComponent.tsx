import * as React from 'react';

export class OptionsComponent extends React.Component  {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <aside className='aside'>
                <form action='' className='form'>
                    <div className='row'>
                        <div className='col-large-12'>
                        <h4>Personal Information</h4>
                        </div>
                        <div className='form__field col-large-12'>
                            <label htmlFor='postionApplying' className='form__label'>
                                Position you are applying for
                            </label>
                            <input id='postionApplying' type='text' value='Senio Front end Developer' className='form__input form__label--large' />
                        </div>
                        <div className='form__field col-large-6'>
                            <label htmlFor='firstName' className='form__label'>
                                First Name
                            </label>
                            <input id='firstName' type='text' value='Mauro' placeholder='' className='form__input form__label--large' />
                        </div>
                         <div className='form__field col-large-6'>
                            <label htmlFor='lastName' className='form__label'>
                                Last Name
                            </label>
                            <input id='lastName' type='text' value='Reis Vieira' placeholder='' className='form__input form__label--large' />
                        </div>
                        <div className='form__field col-large-6'>
                            <label htmlFor='phoneNumber' className='form__label'>
                                Phone Number
                            </label>
                            <input id='phoneNumber' type='text' value='917771054' placeholder='' className='form__input form__label--large' />
                        </div>
                        <div className='form__field col-large-6'>
                            <label htmlFor='fieldEmail' className='form__label'>
                                Email
                            </label>
                            <input id='fieldEmail' type='email' value='mauroreisvieira@gmail.com' placeholder='' className='form__input form__label--large' />
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
                            <button className='button button--large button--success'>Save Changes</button>
                        </div>
                    </div>
                </form>
            </aside>
        );
    }
}
