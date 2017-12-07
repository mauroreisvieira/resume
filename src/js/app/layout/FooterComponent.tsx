import * as React from 'react';

export class FooterComponent extends React.Component {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <footer className='footer'>
                <p>Footer</p>
            </footer>
        );
    }
}
