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
	

			return RSVP.hash({
		    enrollment: params.enrollment,
        teacher: teacher
		});
  }
});
