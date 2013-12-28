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
      availablePatterns: [
        {
          key: 'Empty',
          start: [0, 0],
          value: []
        },
        {
          key: 'R-Pentomino',
          start: [0.5, 0.5],
          value: [[-1, 0], [-1, 1], [0, -1], [0, 0], [1, 0]]
        },
        {
          key: 'Glider',
          start: [0, 0],
          value: [[0, 1], [1, 2], [2, 0], [2, 1], [2, 2]]
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
      var pattern = _.find(this.get('availablePatterns'), function(p) {
        return p.key === patternKey;
      });
      this.set('pattern', pattern);
    },

    _canSetDelay: function(delay) {
      return delay >= this.minDelay && delay <= this.maxDelay;
    }
  });
});
