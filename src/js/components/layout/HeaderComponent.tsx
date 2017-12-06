import * as React from 'react';

export class HeaderComponent extends React.Component  {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <header className='header navbar navbar--spacebetween bg-blue text-white'>
                <div className='navbar__brand'>
                    <a href='/' title='Resume'>
                        <span className='uppercase semibold text-white large'>Resume</span>
                    </a>
                </div>
                <div className='navbar__menu'>
                    <ul className='menu menu--horizontal menu--inherit'>
                        <li className='menu__item'>
                            <a className='menu__link' href='installation.html' title='My Resume'>Resumes</a>
                        </li>
                        <li className='menu__item'>
                            <a className='menu__link' href='' title='Profile'>Profile</a>
                        </li>
                        <li className='menu__item'>
                            <a className='menu__link' href='https://github.com/maurovieirareis/resume' title='Github'>Github</a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
