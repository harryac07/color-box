import React from 'react';

function Footer(props){
	return(
        <div className="footer">
            <h4 className="text-xs-center">There are {props.totalColors} boxes.</h4>
        </div>
	);
}

export default Footer;
