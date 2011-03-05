/*
---

name: Selector.Attach

description: Binds a selector to an object that takes the selector element as
             first argument.

license: MIT-style license.

requires:
	- Core/DOMReady

provides:
	- Selector.Attach

...
*/

if (!window.Selector) window.Selector = {};

Object.append(Selector, {

	attach: function(selector, type, options) {
		window.addEvent('domready', function() {
			document.getElements(selector).each(function(element) {
				var current = element.retrieve(type);
				if (current == null) {
					element.store(type, new type(element, options));
				}
			});
		});
		return this;
	}

});