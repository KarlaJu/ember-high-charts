import Component from '@ember/component';

export default Component.extend({


	teacher: Ember.computed('', function(){
		let teacher = this.get("teacher");
		return teacher;
	})

});
