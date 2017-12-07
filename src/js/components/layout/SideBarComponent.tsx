import * as React from 'react';

export class SideBarComponent extends React.Component  {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <nav className='sidebar bg-blue--darken'>
                <ul className='menu menu--inherit'>
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
            </nav>
        );
    }
}
