import * as React from 'react';
import '../../scss/theme/employment.scss';

export class EmploymentComponent extends React.Component {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
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
        );
    }
}
