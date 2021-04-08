import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Container} from 'reactstrap';

export default function SectionName(props){
	return(
		<div>
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display-3">{props.header}</h1>
					<p className="lead">{props.text}</p>
				</Container>
			</Jumbotron>
		</div>
	);
}