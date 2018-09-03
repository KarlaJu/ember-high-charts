import Component from '@ember/component';

export default Component.extend({


	teacher: Ember.computed('', function(){
		let current_teacher = this.get('teacher');
		return current_teacher;
	})


});
