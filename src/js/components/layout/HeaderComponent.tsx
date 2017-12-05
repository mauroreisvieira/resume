import * as React from 'react';

export class HeaderComponent extends React.Component  {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <div className='content'>
                <p>Header</p>
            </div>);
    }
}
