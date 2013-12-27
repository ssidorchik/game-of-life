define([
  'underscore',
	'backbone'
],
function( _, Backbone ) {
  'use strict';

	return Backbone.Model.extend({
		defaults: {
      running: false,
      delay: 400,
      dimension: 50,
      patterns: [
        {
          key: 'Empty',
          value: []
        },
        {
          key: 'R-Pentomino',
          value: [[0, 0], [0, 1], [1, -1], [1, 0], [2, 0]]
        }
      ]
    },

    initialize: function() {
      this.maxDelay = 3200;
      this.minDelay = 50;
      this.set('defaultDelay', this.get('delay'));
    },

    setDelay: function(delay) {
      if (this._canSetDelay(delay)) {
        this.set('delay', delay);
      }
    },

    increaseSpeed: function() {
      this.setDelay(this.get('delay') / 2);
    },

    decreaseSpeed: function() {
      this.setDelay(this.get('delay') * 2);
    },

    changePattern: function(patternKey) {
      var pattern = _.find(this.get('patterns'), function(p) {
        return p.key === patternKey;
      });
      this.set('currentPattern', pattern);
    },

    _canSetDelay: function(delay) {
      return delay >= this.minDelay && delay <= this.maxDelay;
    }
  });
});
