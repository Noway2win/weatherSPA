import React from 'react';
import './section.css';

export default function SectionName(props){
	return(
		<div className="six"><h1><span>{props.header}</span></h1></div>
	);
}