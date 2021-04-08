import React from 'react';
import {Table, Alert} from 'reactstrap';
import getImage from '../../../services/getImage';
import SectionName from '../../section/section';

const FutureWeather = (props) =>{
	try{
		const days = props.weatherArr.map(elem => {
			const {dt, temp, pressure, wind_speed, weather} = elem;
			const date = new Date(dt * 1000).toLocaleDateString();
			const {morn, day, eve, night} = temp;
			return (<tr key={date}>
				<td scope="row">{date}</td>
				<td><img src={getImage(weather[0].icon)} alt={weather[0].description}></img></td>
				<td>{morn}&#8451;</td>
				<td>{day}&#8451;</td>
				<td>{eve}&#8451;</td>
				<td>{night}&#8451;</td>
				<td>{pressure}  mBar</td>
				<td>{wind_speed} m/s</td>
			</tr>);
		});
		return (
			<>
				<SectionName header={`Future weather in ${props.header}`}/>
				<Table dark>
					<thead>
						<tr>
							<th>Date</th>
							<th>Condition</th>
							<th>Morning Tempreture</th>
							<th>Day Tempreture</th>
							<th>Evening Tempreture</th>
							<th>Night Tempreture</th>
							<th>Pressure</th>
							<th>Wind Speed</th>
						</tr>
					</thead>
					<tbody>
						{days}
					</tbody>
				</Table>
			</>
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

export default FutureWeather;