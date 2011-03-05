/*
---

name: Fx.Accordion.Radio

description: An accordion that uses radio buttons instead of any other type of
             elements.

license: MIT-style license.

requires:
	- Core/Class
	- Core/Class.Extras
	- More/Fx.Accordion

provides:
	- Fx.Accordion.Radio

...
*/

Fx.Accordion.Radio = new Class({

	Extends: Fx.Accordion,

	initialize: function(radios, elements, options) {
		radios.each(function(radio, index) {
			// set the last checked radio to be displayed
			if (radio.checked) this.options.display = index;
		}, this);
		return this.parent(radios, elements, options);
	},

	display: function(index) {
		var radio = this.togglers[index];
		if (radio.checked) {
			this.parent(index);
		}
		return this;
	}

});