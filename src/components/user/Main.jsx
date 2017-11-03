/**
 * Created by jacky on 2017/10/27.
 */
import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as a from '../../redux/actions/';
import './home.less';

export class User extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	};

	render() {
		return (
			<div>
				<h1 onClick={()=>this.props.goUrl("/product")}>
					demo
				</h1>
				{
					(()=>{
						if(this.props.demo_data){
							return(
								<p>{this.props.demo_data}</p>
							)
						}
					})()
				}
				<nav>
					<a href="javascript:" onClick={()=>this.props.goUrl("/index")}>首页</a>
					<a href="javascript:" onClick={()=>this.props.goUrl("/product")}>产品</a>
					<a href="javascript:" onClick={()=>this.props.goUrl("/vip")}>VIP</a>
					<a href="javascript:" onClick={()=>this.props.goUrl("/discover")}>发现</a>
					<a href="javascript:" onClick={()=>this.props.goUrl("/user")}>我的</a>
				</nav>
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

export default User = connect(states, dispatchs)(User);


