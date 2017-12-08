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
                    <ul className='list'>
                        <li className='list__item'>
                            <div className='flex flex--column ml-10'>
                                <span className='semibold small mr-10'>Mauro Reis Vieira</span>
                            </div>
                            <img src='https://pbs.twimg.com/profile_images/913828202832973826/1WWUHoo5_400x400.jpg' className='list__pic list__pic--small' />
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
