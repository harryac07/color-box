import React,{Component} from 'react';
import {Link} from 'react-router';
import _ from 'lodash';

class Preference extends Component{
	constructor(props){
		super(props);
		this.state={
			selectedColor : ""
		}
	}
	componentWillMount(){
		this.findCurrentColor();
	}
	findCurrentColor=()=>{
		const id= this.props.params.id;
		var index = _.findIndex(this.props.colors, {id: id});
		var colorName = _.find(this.props.colors, {id:id}); // use lodash find method

		this.setState({selectedColor:colorName.name});
	}
	render(){
		return(
			<div className="container-fluid">
				<div className="header">
					<Link to="/"><button className="btn btn-primary pull-xs-left">Go Home</button></Link>
				</div>
				<h1 className="text-xs-center">User Preferences</h1>
				<br />
				<div className="preference">
					<h3>There are {this.props.colors.length} color-boxes.</h3>
					<h4 style={{color : this.state.selectedColor,display:'block'}}>Current color is <strong>{this.state.selectedColor}</strong>.</h4>
				</div>
			</div>
		);
	}
}

export default Preference;