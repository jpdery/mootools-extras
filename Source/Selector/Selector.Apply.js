/*
---

name: Selector.Apply

description: Binds a selector to a function.

license: MIT-style license.

requires:
	- Core/DOMReady

provides:
	- Selector.Apply

...
*/

if (!window.Selector) window.Selector = {};

Object.append(Selector, {

	apply: function(rules) {
		window.addEvent('domready', function() {
			this.assign(rules);
		}.bind(this));
		return this;
	},

	assign: function(rules) {
		for (var key in rules) {
			var rule = rules[key];
			key.clean().split(',').each(function(selector) {
				var pair = selector.split('::');
				$$(pair[0]).each(function(elem, index) {
					if (pair.length == 1) return rule(elem, index);
					var r = rule;
					var event = function(e) {
						r.call(this, elem, index, e);
					};
					elem.addEvent(pair[1], event);
				});
			}, this);
		}
	}

});
