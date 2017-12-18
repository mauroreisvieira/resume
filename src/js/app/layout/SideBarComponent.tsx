import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

export class SideBarComponent extends React.Component  {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <nav className='sidebar'>
                <ul className='menu menu--inherit'>
                    <li className='menu__item'>
                        <Link to='/' className='menu__link tooltip tooltip--right' href='' title='' data-tooltip='Personal Information'>
                            <i className='icon ion-person'></i>
                        </Link>
                    </li>
                    <li className='menu__item'>
                        <Link to='/employment' className='menu__link tooltip tooltip--right' href='' title='' data-tooltip='Employment History'>
                            <i className='icon ion-ios-briefcase'></i>
                        </Link>
                    </li>
                    <li className='menu__item'>
                        <Link to='/education' className='menu__link tooltip tooltip--right' href='' title='' data-tooltip='Education'>
                            <i className='icon ion-university'></i>
                        </Link>
                    </li>
                    <li className='menu__item'>
                        <Link to='/skills' className='menu__link tooltip tooltip--right' href='' title='' data-tooltip='Skills'>
                            <i className='icon ion-clipboard'></i>
                        </Link>
                    </li>
                    <li className='menu__item'>
                        <Link to='/languages' className='menu__link tooltip tooltip--right' href='' title='' data-tooltip='Languages'>
                            <i className='icon ion-android-globe'></i>
                        </Link>
                    </li>
                    <li className='menu__item'>
                        <Link to='/hobbies' className='menu__link tooltip tooltip--right' href='' title='' data-tooltip='Hobbies'>
                            <i className='icon ion-ios-heart'></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
