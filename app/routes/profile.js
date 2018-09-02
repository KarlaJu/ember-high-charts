import Route from '@ember/routing/route';
import ENV from "../config/environment";
import RSVP from 'rsvp';

export default Route.extend({
	model(params){
    
    let teacher= new RSVP.Promise(function (resolve, reject) {
      $.ajax({
        type: 'GET',
        url: ENV.rootURL+'v1/api/teachers',
        success: function (data) {
          resolve(data);
        },
        error: function (request, textStatus, error) {
          reject(error);
        }
      });
    });

    let competencias = teacher.skillTests;
    let lista = [1,2,3,4,1,2,3,4];


    let chartOptions = {
      chart: {
        type: 'line',
      },
      title: {
        text: teacher.assignedEvaluation
      },
      subtitle:{
        text: teacher.username
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
		    enrollment: params.enrollment,
        teacher: teacher,
        options: chartOptions
		});
  }
});
