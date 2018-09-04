import Component from '@ember/component';

export default Component.extend({


	chartModel: Ember.computed('teacher', function(){
		let current_teacher = this.get('teacher');
		let title = this.getTitle(current_teacher);
    let subtitle = this.getSubtitle(current_teacher);
    let skillTests = this.getResults(current_teacher).listOfSkilltests;
    let skillType = this.getResults(current_teacher).listOfTypes;

		let chartModel = {
			chart: {
				type: 'line',
			},
			title: {
				text: title
			},
			subtitle:{
				text: subtitle
			},
			xAxis: {
				categories: skillTests
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
				data: skillType
			}]
		};
		return chartModel;
	}),

	getTitle: function(current_teacher){
		return current_teacher.assignedEvaluation;
	},

  getSubtitle: function(current_teacher){
    return current_teacher.username;
  },

	getResults: function(current_teacher){
    let listOfSkilltests = [];
    let listOfTypes = [];
    let map = {"Imprecisa":1, "Latente":2, "Gestándose":3, "Produciendo":4 }
    current_teacher.skillTests.forEach(function(record){
        listOfSkilltests.push(record.skillTest);
        listOfTypes.push(map[record.type]);
      })
    let mapSkillsResult = {listOfSkilltests, listOfTypes};
		return mapSkillsResult
	}
});
