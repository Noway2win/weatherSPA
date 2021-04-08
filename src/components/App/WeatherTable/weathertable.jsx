import React from 'react';
import {Table, Alert} from 'reactstrap';

const Weather = (props) =>{
	try{
		const {temp, pressure, humidity, feelsLike} = props.data,
			city= props.city;

		return (
			<Table dark>
				<thead>
					<tr>
						<th>City</th>
						<th>Tempreture</th>
						<th>Pressure</th>
						<th>Humidity</th>
						<th>Feels Like</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">{city}</th>
						<td>{temp}&#8451;</td>
						<td>{pressure} mBar</td>
						<td>{humidity}%</td>
						<td>{feelsLike}&#8451;</td>
					</tr>
				</tbody>
			</Table>
		);
	}
	catch(e){
		return ( <div>
			<Alert color="danger">
				<h4 className="alert-heading">Woops!</h4>
				<p>
				Something went horribly wrong. but I dont want to left your unnoticed =) 
				</p>
				<hr />
				<p className="mb-0">
				Maybe try next time, my friend &#128516;
				</p>
			</Alert>
		</div>);
	}
};

export default Weather;