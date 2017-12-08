import * as React from 'react';

export class SideBarComponent extends React.Component  {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <nav className='sidebar'>
                <ul className='menu menu--inherit'>
                    <li className='menu__item'>
                        <a className='menu__link tooltip tooltip--right is-active' href='' title='' data-tooltip='Personal Information'>
                            <i className='icon ion-person'></i>
                        </a>
                    </li>
                    <li className='menu__item'>
                        <a className='menu__link tooltip tooltip--right' href='' title='' data-tooltip='Employment History'>
                            <i className='icon ion-ios-briefcase'></i>
                        </a>
                    </li>
                    <li className='menu__item'>
                        <a className='menu__link tooltip tooltip--right' href='' title='' data-tooltip='Education'>
                            <i className='icon ion-university'></i>
                        </a>
                    </li>
                    <li className='menu__item'>
                        <a className='menu__link tooltip tooltip--right' href='' title='' data-tooltip='Skills'>
                            <i className='icon ion-clipboard'></i>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
