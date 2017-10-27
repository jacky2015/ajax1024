

import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as a from './redux/actions/'

export class Demo3 extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    };
    render() {
        return (
            <div>
                <h1 onClick={()=>this.props.goUrl("/index")}>
                    demo3
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

export default Demo3 = connect(states, dispatchs)(Demo3);
