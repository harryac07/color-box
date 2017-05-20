import React,{Component} from 'react';
import colors from '../colors';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
            colors : colors()
		};
	}
	render(){
        var children = React.Children.map(
           this.props.children,
           child => React.cloneElement(child,
	            { 
	              colors:this.state.colors
	            }
	        )
        );
		return(
			<div className="container-fluid">
				{children}
			</div>
		);
	}
}

export default App;




