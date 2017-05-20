import React,{Component} from 'react';

class Footer extends Component{
	render(){
		return(
            <div className="footer">
                <h4 className="text-xs-center">There are {this.props.totalColors} boxes.</h4>
            </div>
		);
	}
}

export default Footer;
