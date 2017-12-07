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
                        <a className='menu__link tooltip tooltip--right is-active' href='' title='' data-tooltip='New Resume'>
                            <i className='icon ion-clipboard'></i>
                        </a>
                    </li>
                    <li className='menu__item'>
                        <a className='menu__link tooltip tooltip--right' href='' title='' data-tooltip='Archive'>
                            <i className='icon ion-ios-box'></i>
                        </a>
                    </li>
                    <li className='menu__item'>
                        <a className='menu__link tooltip tooltip--right' href='' title='' data-tooltip='Settings'>
                            <i className='icon ion-gear-b'></i>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
