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
                        <h4 className='x-bold'>Employment History</h4>
                     </div>
                    <div className='col-large-4'>
                        <ul className='list'>
                            <li className='list__item'>
                                <div className='flex flex--column'>
                                    <p>Apr 2013 - May 2016</p>
                                    <p className='uppercase text-salmon'>Leiria</p>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='flex flex--column'>
                                    <p>May 2016 - Oct 2017</p>
                                    <p className='uppercase text-salmon'>Leiria</p>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='flex flex--column'>
                                    <p>Oct 2017 - Present</p>
                                    <p className='uppercase text-salmon'>Leiria</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='col-large-8'>
                        <ul className='list'>
                            <li className='list__item'>
                                <div className='flex flex--column'>
                                    <p>Web Developer</p>
                                    <p className='uppercase text-salmon'>WayAcross</p>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='flex flex--column'>
                                    <p>Senio Front end Developer</p>
                                    <p className='uppercase text-salmon'>Hi INTERACTIVE</p>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='flex flex--column'>
                                    <p>Senio Front end Developer</p>
                                    <p className='uppercase text-salmon'>Namecheap</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
