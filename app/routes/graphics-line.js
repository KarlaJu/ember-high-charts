import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model(){
		let lista = [1,2,3,4,1,2,3,4];
		let competencias = ['Cultura EBC', 'Comunicación Interpersonal', 'Comunicación Intrapersonal', 'Gestión de Clase', 'Gestión Tecnológica', 'Liderazgo', 'Orientación al alumno', 'Vinculación laboral'];
		let user = [
		{"level":1, "description":'Cultura EBC'},
		{"level":2, "description":'Comunicación Interpersonal'},
		{"level":3, "description":'Comunicación Intrapersonal'},
		{"level":4, "description":'Gestión de Clase'},
		{"level":1, "description":'Gestión Tecnológica'},
		{"level":2, "description":'Liderazgo'},
		{"level":3, "description":'Orientación al alumno'},
		{"level":4, "description":'Vinculación laboral'}
		];




		let chartOptions = {
			chart: {
				type: 'line',
			},
			title: {
				text: 'Evaluación Docencia I Dic 2017'
			},
      subtitle:{
        text: "Ce.garcia"
      },
			xAxis: {
				categories: competencias
			},
			yAxis: {
				title:{
          text: "Nivel"
        },
        categories: ['','1 Latente', '2 Impreciso', '3 Gestándose', '4 Produciendo']
			},

      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: true
        }
      },
      series: [{
        name: 'Usuario Evaluado',
        data: lista
      }]
		};

		return RSVP.hash({
			options: chartOptions,
			level: user


		});
	}
});