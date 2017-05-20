import React,{Component} from 'react';
import {Link} from 'react-router';
import Form from './Add_form';
import allColors from '../colors';
import _ from 'lodash';
// {this.props.params.id+" "+JSON.stringify(this.props.location.query)}
class ColorDetail extends Component{
	constructor(props){
		super(props);
		this.state={
			changeColor:false
		}
	}
	handleFormSubmit=(e)=>{
		e.preventDefault();
	}
	renderForm=()=>{
		this.setState({changeColor : !this.state.changeColor});
	}
    /* add color */
    onChangeColor=(color)=>{
        const id= this.props.params.id;
        const name=color.name
        var index = _.findIndex(this.props.colors, {id: id});
		// Replace item at index using native splice
		this.props.colors.splice(index, 1, {id: id, name: name});

        this.setState({changeColor:true});
        /* route to detail page */
        this.state.changeColor ? this.props.router.push('/id/'+id+'?color='+name) : null
        

    }
	render(){
		return(
			<div className="container-fluid">
				<div className="header">
					<Link to="/"><button className="btn btn-primary pull-xs-left">Go Home</button></Link>
					<Link to={"/preference/id/"+this.props.params.id}>
						<button className="btn btn-default pull-xs-right">Preferences</button>
					</Link>
					<button className="btn btn-danger pull-xs-right" onClick={this.renderForm}>Change Color</button>
					{
						this.state.changeColor ?
							<Form bringColor={this.onChangeColor} colors={this.props.colors} />
				        : null
				    }
				</div>
				<div className="well" style={{backgroundColor:this.props.location.query.color}}>

				</div>
				<h3 className="text-xs-center">The color is {this.props.location.query.color}</h3>
			</div>
		);
	}
}

export default ColorDetail;