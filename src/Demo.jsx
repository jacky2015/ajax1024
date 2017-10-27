
import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as a from './redux/actions/'

export class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    };

    render() {
        return (
            <div>
                <h1 onClick={()=>this.props.goUrl("/index2")}>
                    demo
                </h1>
                <input type="button" onClick={()=>this.props.get_data("测试数据")} value={"展开数据"}/>
                {
                    (()=>{
                        if(this.props.demo_data){
                            return(
                                <p>{this.props.demo_data}</p>
                            )

                        }
                    })()
                }
            </div>
        )
    }
}

const states = (state)=> {
    return {
        demo_data:state.demo.data,
    }
};
const dispatchs = (dispatch)=> {
    return {
        get_data: (body)=> dispatch(a.demo_action(body)),
        goUrl: (body)=> dispatch(a.goUrl(body)),
    }
};

export default Demo = connect(states, dispatchs)(Demo);
