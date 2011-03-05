/*
---

name: UI.Control

description: Provides the base class for any types of controls.

license: MIT-style license.

requires:
	- Core/Class
	- Core/Class.Extras
	- UI.Element

provides:
	- UI.Control

...
*/

UI.Control = new Class({

	Extends: UI.Element,

	name: null,

	disabled: false,

	options: {
		disabledClassName: 'disabled'
	},

	setName: function(name) {
		this.name = name;
		return this;
	},

	getName: function() {
		return this.name;
	},

	setDisabled: function(disabled) {
		if (this.disabled != disabled) {
			this.disabled = disabled;
			if (this.disabled) {
				this.addClass(this.options.disabledClassName);
				this.attachEvents();
			} else {
				this.removeClass(this.options.disabledClassName);
				this.detachEvents();
			}
		}
		return this;
	},

	idDisabled: function() {
		return this.disabled;
	}

});