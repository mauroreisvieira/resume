import * as React from 'react';
import '../../scss/theme/employment.scss';

export class EmploymentComponent extends React.Component {
    public state: any = {};

    constructor (props: any) {
        super(props);

        this.state = {
            postionApplying: 'Senior Front end Developer',
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
                        </div>
                    </form>
                </aside>
                <main className='main'>
                    <div className='app-employment'>
                        <div className='row'>
                            <div className='col-large-12'>
                                <h5 className='x-bold'>Employment History</h5>
                             </div>
                            <div className='col-large-12 my-20'>
                                <div className='flex flex--row flex--content-between'>
                                    <div className='flex flex--column vw-2'>
                                        <p>Apr 2013 - May 2016</p>
                                        <p className='uppercase text-salmon'>Leiria</p>
                                    </div>
                                    <div className='flex flex--column col-large'>
                                        <p>Web Developer</p>
                                        <p className='text-salmon'>WayAcross</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-large-12 my-20'>
                                <div className='flex flex--row flex--content-between'>
                                    <div className='flex flex--column vw-2'>
                                        <p>May 2016 - Oct 2017</p>
                                        <p className='uppercase text-salmon'>Leiria</p>
                                    </div>
                                    <div className='flex flex--column col-large'>
                                        <p>Front end Developer</p>
                                        <p className='text-salmon'>Hi INTERACTIVE</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-large-12 my-20'>
                                <div className='flex flex--row flex--content-between'>
                                    <div className='flex flex--column vw-2'>
                                        <p>Oct 2017 - Present</p>
                                        <p className='uppercase text-salmon'>Leiria</p>
                                    </div>
                                    <div className='flex flex--column col-large'>
                                        <p>Senior Front end Developer</p>
                                        <p className='text-salmon'>Namecheap</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
