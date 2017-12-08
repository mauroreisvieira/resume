import * as React from 'react';

export class HeaderComponent extends React.Component  {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <header className='header navbar navbar--spacebetween'>
                <div className='navbar__brand'>
                    <img src='./assets/images/logo.svg' alt='My Vitae' title='My Vitae' />
                </div>
                <div className='navbar__menu'>

                </div>
            </header>
        );
    }
}
