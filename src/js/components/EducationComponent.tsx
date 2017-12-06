import * as React from 'react';
import '../../scss/theme/education.scss';

export class EducationComponent extends React.Component {

    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <div className='app-education'>
                <div className='row'>
                    <div className='col-large-12'>
                        <h5 className='x-bold'>Education</h5>
                     </div>
                    <div className='col-large-12 my-20'>
                        <div className='flex flex--row flex--content-between'>
                            <div className='flex flex--column vw-2'>
                                <p>Nov 2011 - Jul 2013</p>
                                <p className='uppercase text-salmon'>Leiria</p>
                            </div>
                            <div className='flex flex--column col-large'>
                                <p>Intituto Politécnico de Leiria</p>
                                <p className='text-grey mb-20'>CET</p>
                                <p>Multimedia Technologies</p>
                                <p>Data Base</p>
                                <p>Development of Web Applications I and II</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-large-12 my-20'>
                        <div className='flex flex--row flex--content-between'>
                            <div className='flex flex--column vw-2'>
                                <p>Sep 2013 - Present</p>
                                <p className='uppercase text-salmon'>Leiria</p>
                            </div>
                            <div className='flex flex--column col-large'>
                                <p>Intituto Politécnico de Leiria</p>
                                <p className='text-salmon'>Computer Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
