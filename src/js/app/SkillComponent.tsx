import * as React from 'react';
import '../../scss/theme/skill.scss';

export class SkillComponent extends React.Component {

    constructor (props: any) {
        super(props);
    }

    public dotSkill(num: number): any {
        const arrItem = [];
        for (let i = 1; i < 6; ++i) {
            if (i <= num) {
                arrItem.push('●');
            } else {
                arrItem.push('○');
            }
        }
        const listItems = arrItem.map((v: any, index: number) =>
            <span key={index}>{v}</span>,
        );
        return listItems;
    }

    public render(): any {
        return (
            <div className='app-skill'>
                <div className='row'>
                    <div className='col-large-12'>
                        <h5 className='x-bold'>Skills</h5>
                     </div>
                    <div className='col-large-3'>
                        <ul className='list'>
                            <li className='list__item'>
                                <p>HTML</p>
                            </li>
                            <li className='list__item'>
                                <p>CSS/SCSS</p>
                            </li>
                            <li className='list__item'>
                                <p>JavaScript</p>
                            </li>
                            <li className='list__item'>
                                <p>Typescript</p>
                            </li>
                            <li className='list__item'>
                                <p>ReactJS</p>
                            </li>
                            <li className='list__item'>
                                <p>VueJS</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-large-3'>
                        <ul className='list'>
                            <li className='list__item'>
                                <p className='text-salmon'>{this.dotSkill(5)}</p>
                            </li>
                            <li className='list__item'>
                                <p className='text-salmon'>{this.dotSkill(5)}</p>
                            </li>
                            <li className='list__item'>
                                <p className='text-salmon'>{this.dotSkill(4)}</p>
                            </li>
                            <li className='list__item'>
                                <p className='text-salmon'>{this.dotSkill(3)}</p>
                            </li>
                            <li className='list__item'>
                                <p className='text-salmon'>{this.dotSkill(3)}</p>
                            </li>
                            <li className='list__item'>
                                <p className='text-salmon'>{this.dotSkill(3)}</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-large-3'>
                        <ul className='list'>
                            <li className='list__item'>
                                <p>PHP</p>
                            </li>
                            <li className='list__item'>
                                <p>Laravel</p>
                            </li>
                            <li className='list__item'>
                                <p>Zend</p>
                            </li>
                            <li className='list__item'>
                                <p>Codeigniter</p>
                            </li>
                            <li className='list__item'>
                                <p>Codeigniter</p>
                            </li>
                            <li className='list__item'>
                                <p>Codeigniter</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-large-3'>
                        <ul className='list'>
                            <li className='list__item'>
                                 <p className='text-salmon'>{this.dotSkill(4)}</p>
                            </li>
                            <li className='list__item'>
                                <p className='text-salmon'>{this.dotSkill(4)}</p>
                            </li>
                            <li className='list__item'>
                                <p className='text-salmon'>{this.dotSkill(4)}</p>
                            </li>
                            <li className='list__item'>
                                <p className='text-salmon'>{this.dotSkill(4)}</p>
                            </li>
                            <li className='list__item'>
                                <p className='text-salmon'>{this.dotSkill(4)}</p>
                            </li>
                            <li className='list__item'>
                                <p className='text-salmon'>{this.dotSkill(4)}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
