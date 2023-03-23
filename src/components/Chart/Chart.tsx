import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(234, 88, 12, 0.5)',
    borderColor: 'rgb(234, 88, 12)',
    pointBackgroundColor: 'rgba(0,0,0,1)',
    pointBorderColor: 'rgb(234, 88, 12)',
    pointHoverBackgroundColor: 'rgba(0,0,0,1)',
    pointHoverBorderColor: 'rgb(234, 88, 12)'
  }, {
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderColor: 'rgb(255, 255, 255)',
    pointBackgroundColor: 'rgba(234, 88, 12, 1',
    pointBorderColor:'rgb(82, 82, 91)',
    pointHoverBackgroundColor:'rgb(82, 82, 91)',
    pointHoverBorderColor: 'rgb(82, 82, 91)'
  }]
}


function Chart() {
  return (
    <Radar
			data={data}
			options={{
				responsive: true,
				plugins: {
				title: {
					display: true,
					text: 'Controlled territories'
					}
				},
				scales: {
					r: {
						grid: {
							color: 'rgba(82, 82, 91, 0.7)'
						},
						pointLabels: {
							color: 'white'
						},
						angleLines: {
							color: 'rgba(82, 82, 91, 0.7)'
						},
						ticks: {
							display: false
						},
            min: 0,
            max: 100,
					}
				},
				elements: {
					point: {
						pointStyle: 'rectRot',
						radius: 5,
						borderWidth: 3,
						hoverBorderWidth: 2
					}
				}
			}}
    />
	)
}

export default Chart
