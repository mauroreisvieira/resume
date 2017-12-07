import * as React from 'react';

export class HeaderComponent extends React.Component  {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <header className='header navbar navbar--spacebetween'>
                <div className='navbar__brand'>
                    <span className='uppercase semibold large'>Resume App</span>
                </div>
                <div className='navbar__menu'>
                    <button className='button button--small button--default'>
                            <i className='icon ion-android-download mr-10 medium'></i>
                            Export Resume
                    </button>
                </div>
            </header>
        );
    }
}
