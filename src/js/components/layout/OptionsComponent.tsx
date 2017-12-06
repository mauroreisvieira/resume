import * as React from 'react';

export class OptionsComponent extends React.Component  {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <aside className='aside'>
                <form action='' className='form'>
                    <div className='form__field'>
                        <label htmlFor='fieldName' className='form__label'>
                            Name <span className='text-red'>*</span>
                        </label>
                        <input id='fieldName' type='text' name='' placeholder='' className='form__input form__label--large' />
                    </div>
                    <div className='form__field'>
                        <label htmlFor='fieldEmail' className='form__label'>
                            Email <span className='text-red'>*</span>
                        </label>
                        <input id='fieldEmail' type='email' name='' placeholder='' className='form__input form__label--large' />
                    </div>
                    <div className='form__field'>
                        <label htmlFor='fieldMessage' className='form__label'>
                            Message<span className='text-red'>*</span>
                        </label>
                        <textarea id='fieldMessage' className='form__textarea'></textarea>
                    </div>
                    <div className='form__actions'>
                        <button className='button button--info'>Send</button>
                        <button className='button button--default'>Reset</button>
                    </div>
                </form>
            </aside>
        );
    }
}
