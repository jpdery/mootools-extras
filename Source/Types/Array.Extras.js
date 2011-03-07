/*
---

name: Array.Extras

description: Provides extra methods to the array object.

license: MIT-style license.

requires:
	- Core/Array

provides:
	- Array.Extras

...
*/

Array.implement({

	find: function(fn) {
		for (var i = 0; i < this.length; i++) {
			var found = fn.call(this, this[i]);
			if (found == true) {
				return this[i];
			}
		}
		return null;
	},

	add: function(item) {
		this.unshift(item);
	},

	remove: function(item) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] === item) {
				this.splice(i, 1);
				return true;
			}
		}
		return false;
	},

	getLast: function(offset) {
		offset = offset ? offset : 0;
		return this[this.length - 1 - offset] ?
			   this[this.length - 1 - offset] :
			   null;
	}

});