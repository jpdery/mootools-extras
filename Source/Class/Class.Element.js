/*
---

name: Class.Element

description: Provides a set of methods for classes that handles an element such
             as the toElement method.

license: MIT-style license.

requires:
	- Core/Class
	- Core/Class.Extras
	- Core/Element

provides:
	- Class.Element

...
*/

Class.Element = new Class({

	element: null,

	setElement: function(element) {
		if (this.element == null) this.element = document.id(element);
		if (this.element == null) this.element = document.getElement(element);
		return this;
	},

	getElement: function(selector) {
		return arguments.length ? this.element.getElement(arguments[0]) : this.element;
	},

	toElement: function() {
		return this.element;
	}

})