import Route from '@ember/routing/route';
import ENV from "../config/environment";
import RSVP from 'rsvp';

export default Route.extend({
  beforeModel(/* transition */) {
    //this.transitionTo('posts'); // Implicitly aborts the on-going transition.
  
    console.log("Before model here!!!");
  },

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

    let teacherExample = {
      "id": 180,
      "username": "cf.ruiz",
      "enrollment": "M00227967",
      "author": "ia.quiroga",
      "status": "Contestada",
      "campusCode": "LEO",
      "assignedEvaluation": "Evaluación Docencia I DIC 2017",
      "skillTests": [
        {
          "skillTest": "Cultura EBC",
          "type": "Imprecisa"
        },
        {
          "skillTest": "Gestión de Clase",
          "type": "Latente"
        },
        {
          "skillTest": "Comunicación Intrapersonal",
          "type": "Produciendo"
        },
        {
          "skillTest": "Comunicación Interpersonal",
          "type": "Latente"
        },
        {
          "skillTest": "Orientación al alumno",
          "type": "Produciendo"
        },
        {
          "skillTest": "Liderazgo",
          "type": "Produciendo"
        },
        {
          "skillTest": "Vinculación laboral",
          "type": "Latente"
        },
        {
          "skillTest": "Gestión tecnológica",
          "type": "Latente"
        }
      ]
    };



    let competencias = teacherExample.skillTests.skillTest;
    let lista = [1,2,3,4,1,2,3,4];
    
    console.log(teacher.assignedEvaluation);
    console.log(teacher.username);


    let chartOptions = {
      chart: {
        type: 'line',
      },
      title: {
        text: teacherExample.assignedEvaluation
      },
      subtitle:{
        text: teacherExample.username
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
