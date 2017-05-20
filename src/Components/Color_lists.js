import React,{Component} from 'react';
import Form from './Add_form';
import Footer from './Footer';
import {Link} from 'react-router';

class ColorLists extends Component{
	constructor(props){
		super(props);
		this.state={
			addColor : false, // form display handle
            selected : [], //array of selected object of colors
            unselect:false, // remove selection handling
            deleted : false,
            colorSelected : false
		};
	}

    /* render form to add color */
	renderForm=(e)=>{
		this.setState({addColor : !this.state.addColor});
	}

    /* add color */
    addColor=(color)=>{
        this.props.colors.push(color);
        this.setState({addColor:true});
    }

    /* select color and add the color object to state */
    handleSelect=(colorObject,e)=>{
 
        /* if colorbox  is not selected, select that colorbox */
        if(this.state.selected.indexOf(colorObject)<=-1){
            this.setState({
                selected: this.state.selected.concat(colorObject),
                colorSelected : !this.state.colorSelected,
                unselect : true
            });      
            /* if there is any color-box selection, mark it as selected */
            e.target.innerHTML="<span>SELECTED</span>"; 
        }
        e.preventDefault();
    } 

    /* selection text remove from dom */
    removeSelectedText=()=>{
        var colorbox = document.querySelectorAll('.each_color');
        for (var i = 0, length = colorbox.length; i < length; i++) {
            colorbox[i].innerHTML = '';
        }    
    }  

    /* unselect all the colors */
    removeSelect=(e)=>{
        this.setState({
            selected : [],
            unselect : false

        });
        this.removeSelectedText();
        e.preventDefault();
    }

    handleDelete=(e)=>{

        var allColors=this.props.colors;

        /* if no selection is made, delete the last one */
        if(this.state.selected.length<=0 ){

            var confirmDelete=confirm('Are you sure, delete last color-box?');
            if(confirmDelete===true){
                var lastIndex=allColors.length-1;
                allColors.splice(lastIndex, 1);

                this.setState({deleted: true }); 
            }
        }else{ /* if there is any selection, delete selected color-box */
            
            var confirmDelete=confirm('Are you sure, delete '+this.state.selected.length+' color-box?');
            /* if delete button is clicked , delete the selected */
            if(confirmDelete===true){
                var colorsToRemove = this.state.selected;
                for(var i=0;i<colorsToRemove.length;i++){
                    var index = allColors.indexOf(colorsToRemove[i]);
                    allColors.splice(index, 1);   
                }
                /* delete selected mark in all color-box*/
                this.removeSelectedText();
                /* reset states after deletion */
                this.setState({
                    selected: [],
                    deleted : true,
                    unselect : false
                });

            }else{ /* if cancel button is clicked, remove selection and don't delete */
                this.setState({selected: [],unselect : false}); 
                /* delete selected mark in all color-box*/
                this.removeSelectedText();
            }
            
        }
    }

	render(){
		return(
			<div className="container-fluid">
                <div className="header">
                    <button className="btn btn-primary pull-xs-left" onClick={this.renderForm}>Add Color</button>
                    <button className="btn btn-danger pull-xs-right" onClick={(e)=>this.handleDelete()}>Delete Color</button>
                    { this.state.unselect ?
                        <button className="btn btn-warning pull-xs-right" onClick={(e)=>this.removeSelect(e)}>Unselect all</button>
                        : null
                    }
                    { this.state.addColor ? <Form bringColor={this.addColor} colors={this.props.colors} /> : null }
                </div>
                <div className="colors row">
                    {
                    	this.props.colors.map((color,i)=>{
                    		return(
			                    <div key={i} className="col-xs-6 col-md-3 col-sm-3" >
                                    <a>
    			                        <div className="each_color" style={{"backgroundColor":color['name']}} onClick={(e)=>this.handleSelect(color,e)}>
    			                        	{/* selected or not appears here  */}
    			                        </div>
                                    </a>
                                    <div className="middle">
                                        <Link to={"/id/"+color['id']+"?color="+color['name']}>
                                            <div className="text">visit me</div>
                                        </Link>
                                    </div>
			                    </div>
                    		)
                    	})
                    }
                </div>

                <Footer totalColors={this.props.colors.length} />
			</div>
		);
	}
}

export default ColorLists;




