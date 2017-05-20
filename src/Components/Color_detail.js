import React,{Component} from 'react';
import {Link} from 'react-router';
import Form from './Add_form';
import _ from 'lodash';

class ColorDetail extends Component{
	constructor(props){
		super(props);
		this.state={
			changeColor:false
		}
	}
	renderForm=()=>{
		this.setState({changeColor : !this.state.changeColor});
	}
    /* add color */
    onChangeColor=(color)=>{
        const id= this.props.params.id;
        const name=color.name
        var index = _.findIndex(this.props.colors, {id: id});
		// Replace item at index using splice
		this.props.colors.splice(index, 1, {id: id, name: name});

        this.setState({changeColor:true});
        /* route to detail page */
        if(this.state.changeColor){
        	this.props.router.push('/id/'+id+'?color='+name)
        }
    }

	render(){
		return(
			<div>
				<div className="header">
					<Link to="/">
						<button className="btn btn-primary home_button pull-md-left">
							Home <i className="fa fa-home" aria-hidden="true"></i>
						</button>
					</Link>
					<Link to={"/preference/id/"+this.props.params.id}>
						<button className="btn btn-default pull-md-left">
							Preferences <i className="fa fa-cog" aria-hidden="true"></i>
						</button>
					</Link>
					<button className="btn btn-danger pull-md-left" onClick={this.renderForm}>Change Color</button>
					{
						this.state.changeColor ?
							<Form bringColor={this.onChangeColor} colors={this.props.colors} />
				        : null
				    }
				</div>
				<div className="well" style={{backgroundColor:this.props.location.query.color}}>
                    <Link to="/">
                        <div className="display_home_link">Go Home <i className="fa fa-home" aria-hidden="true"></i></div>
                    </Link>
				</div>
				<h3 className="text-xs-center detail_page_footer">The color is {this.props.location.query.color}</h3>
			</div>
		);
	}
}

export default ColorDetail;