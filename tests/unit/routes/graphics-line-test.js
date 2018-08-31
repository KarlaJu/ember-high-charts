import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | graphics-line', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:graphics-line');
    assert.ok(route);
  });
});
