import * as React from 'react';
import * as ReactDOM from 'react-dom';


class SkillComponent extends React.Component {
    constructor(props: any){
        super(props);
        console.log(this.props.user);
    }

    public render(): any {
        return <div>
            <div>Age: {this.props.age}</div>
        </div>;
    }
}

export default SkillComponent;
