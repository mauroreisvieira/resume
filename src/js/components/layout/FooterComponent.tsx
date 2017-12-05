import * as React from 'react';

export class FooterComponent extends React.Component {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (<div className='content'>
                <p>Footer</p>
            </div>);
    }
}
