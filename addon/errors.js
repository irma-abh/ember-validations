import Ember from 'ember';

var get = Ember.get;
var set = Ember.set;

export default DS.Errors.extend({
  unknownProperty: function(property) {
    set(this, property, Ember.A());
    return get(this, property);
  }
});
