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
		var colorName = _.find(this.props.colors, {id:id}); // use lodash find method
		this.setState({selectedColor:colorName.name});
	}
	render(){
		return(
			<div>
				<div className="header">
					<Link to="/"><button className="btn btn-primary">Home <i className="fa fa-home" aria-hidden="true"></i></button></Link>
					<Link to={"/id/"+this.props.params.id+"?color="+this.state.selectedColor} >
						<button className="btn btn-info">
							Go Back <i className="fa fa-arrow-left" aria-hidden="true"></i>
						</button>
					</Link>
				</div>
				<div className="jumbotron">
					<h1 className="text-xs-center">User Preferences</h1>
					<br />
					<div className="preference">
						<h3>There are {this.props.colors.length} color-boxes.</h3>
						<h4 style={{color : this.state.selectedColor,display:'block'}}>Current color is <strong>{this.state.selectedColor}</strong>.</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default Preference;