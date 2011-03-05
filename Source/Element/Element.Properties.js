/*
---

name: Element.Properties

description: Add setter and getters for elements properties.

license: MIT-style license.

requires:
	- Core/Element

provides:
	- Element.Properties

...
*/

/**
 * Add setter and getters for elements properties.
 *
 * @author     Jean-Philippe Dery <jeanphilippe.dery@gmail.com>
 * @version    0.1.0
 */
Element.Properties.checked = {
	get: function() { return this.checked; },
	set: function(value) {
		if (this.checked != value) {
			this.checked = value;
			this.fireEvent('change', value);
		}
	},
	erase: function() {}
};