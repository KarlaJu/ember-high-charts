import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('graphics-line');
  this.route('graphics-line', {path:'graphics-line/:id'});
  this.route('profile', {path:'profile/:enrollment'});
});

export default Router;
