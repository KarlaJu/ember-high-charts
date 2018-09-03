import Component from '@ember/component';

export default Component.extend({


	chartModel: Ember.computed('', function(){
		let current_teacher = this.get('teacher');

		// Call a function
		let title = this.getTitle();

		let getResults = this.getResults( current_teacher.skillTests );

    let chartModel = {
      chart: {
        type: 'line',
      },
      title: {
        text: title
      },
      subtitle:{
        text: "Subtitulo"
      },
      xAxis: {
        categories: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
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
        data: [1,2,3,4,1,2,3,4]
      }]
    };


		return chartModel;
	}),

	getTitle: function(){
		return "Que me ves?";
	},

	getResults: function(teacher){
		let map = {"imprecisa":1, "latente":2, "gestandose":3, "produciendo":4 }
		list = map[teacher.skillTests.type]
		return list
	}

});
