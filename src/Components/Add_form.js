import React,{Component} from 'react';
import allColors from '../colors';
class Form extends Component{
	constructor(props){
		super(props);
		this.state={
			colorAdded : false
		}

	}
	handleFormSubmit=(e)=>{
		const id=this.props.colors.length+1;
		const colorName = this.refs.name.value;
		this.props.bringColor({'id':id,'name':colorName});
		e.preventDefault();
	}
	render(){
		return(
	        <form className="form-inline" onSubmit={this.handleFormSubmit}>
	            <div className="form-group">
	            	<label><strong>SELECT COLOR</strong></label>
				  	<select className="form-control" ref="name">
				  		<option selected="selected">Black</option>
				  	{
					    allColors().map((color,i)=>{
					    	return (<option key={color['name']}>{color['name']}</option>);
					    })
					}

				  	</select>
	            </div>
	            <button type="submit" className="btn btn-default">Submit Color</button>
	        </form>
		);
	}
}

export default Form;
