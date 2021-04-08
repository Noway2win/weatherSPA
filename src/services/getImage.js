export default function getImage(imgName) {
	const imageUrl = 'http://openweathermap.org/img/wn/';
	return (`${imageUrl}${imgName}.png`);
}