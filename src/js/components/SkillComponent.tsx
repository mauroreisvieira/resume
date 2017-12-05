import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface UserProps {
    name: string;
    age: number;
}

export class SkillComponent extends React.Component<UserProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render(): any {
        return <div>
            <h2>Profile</h2>
            <div>Name: {this.props.name}</div>
            <div>Age: {this.props.age}</div>
        </div>;
    }
}
