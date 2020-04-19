// Chart with animation

new Chart(document.getElementById('animationChart'), {
	type: 'bar',
	data: {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
		datasets: [{
			label: '# of votes',
			data: [12, 19, 3, 5, 2, 3],

			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				],

				borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				],

				borderWidtht: 1
		}]
},
options: {
	legend: {
		display: false
	},

	animation: {
		duration: '5000',
		easing: 'easeInOutQuint'
	}
}
});

// Chart with multiple dataset types

new Chart(document.getElementById('advancedChart'), {
	type: 'bar',
	data: {
		labels: ['1900', '1950', '2000', '2050'],
		datasets: [
			{
				label: 'Men (gender)',
				data: ['gold', 'silver', 'bronze'],
				backgroundColor: '#3e95cd'
			},
			{
				label: 'Women (gender)',
				data: ['gold', 'silver', 'bronze'],
				backgroundColor: '#8e5ea2'
			}
		]
	}
});

// Chart with data, then update it!

var updatingChart = new Chart(document.getElementById('updatingDateChart'), {
	type: 'pieChart',
	data: {
		labels: ['Asia', 'Europe', 'North America'],
		datasets: [{
			label: 'Sports',
			backgroundColor: ['#3e95cd', '#8e5ea2', '3cba9f', '#e8c3b9', 'c45850'],
			data: ['Skiing', 'Skating', 'IceHockey', 'Luge', 'Biathlon']
		}]
	},
	options: {
		legend: {
			display: false
		},	
	}
});

// Adding data & label to existing chart
function addData(chart, label, data, backgroundColor) {
	chart.data.labels.push(label);
	chart.data.datasets.[0].data.push(data);
	chart.data.datasets[0].backgroundColor.push(backgroundColor);
	chart.update();
}