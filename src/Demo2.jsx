
import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as a from './redux/actions/'

export class Demo2 extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    };
    render() {
        return (
            <div>
                <h1 onClick={()=>this.props.goUrl("/index3")}>
                    demo2
                </h1>
            </div>
        )
    }
}

const states = (state)=> {
    return {
    }
};
const dispatchs = (dispatch)=> {
    return {
        get_data: (body)=> dispatch(a.demo_action(body)),
        goUrl: (body)=> dispatch(a.goUrl(body)),
    }
};

export default Demo2 = connect(states, dispatchs)(Demo2);
