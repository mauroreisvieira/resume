import * as React from 'react';

export class MenuComponent extends React.Component {
    constructor (props: any) {
        super(props);
    }

    public render(): any {
        return (
            <ul className='menu'>
                <li className='menu__item'>
                    <a href='./index.html' className='menu__item__link'>Home</a>
                </li>
            </ul>
        );
    }
}
