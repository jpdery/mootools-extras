/*
---

name: UI.Element

description: Provide the base class for every classes that use an element at
             core.

license: MIT-style license.

requires:
	- Core/Class
	- Core/Class.Extras
	- Core/DOMReady
	- Core/Element
	- Core/Element.Style
	- Core/Element.Event
	- Core/Element.Dimensions
	- Core/Fx.Tween
	- Core/Fx.Morph
	- More/Class.Binds
	- More/Element.Shortcuts
	- Class.Element

provides:
	- UI.Element

...
*/

if (!window.UI) window.UI = {};

UI.Element = new Class({

	Implements: [
		Events,
		Options,
		Class.Element
	],

	options: {
		className: ''
	},

	initialize: function(element, options) {
		this.setElement(element);
		this.setOptions(options);
		this.element.addClass(this.options.className);
		this.attachEvents();
		return this;
	},

	destroy: function() {
		this.detachEvents();
		this.element.destroy();
		this.element = null;
		return this;
	},

	attachEvents: function() {
		return this;
	},

	detachEvents: function() {
		return this;
	},

	show: function() {
		this.element.show();
		return this;
	},

	hide: function() {
		this.element.hide();
		return this;
	},

	fade: function(how) {
		this.element.fade(how);
		return this;
	},

	addClass: function(name) {
		this.element.addClass(name);
		return this;
	},

	removeClass: function(name) {
		this.element.removeClass(name);
		return this;
	},

	toggleClass: function(name) {
		this.element.toggleClass(name);
		return this;
	},

	adopt: function() {
		this.element.adopt.apply(this.element, arguments);
		return this;
	},

	empty: function() {
		this.element.empty();
		return this;
	},

	dispose: function() {
		this.element.dispose();
		return this;
	}

});