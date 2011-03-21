/*
---

name: Class.Extras

description: Provides extra methods to the class object.

license: MIT-style license.

requires:
	- Core/Class

provides:
	- Class.Extras

...
*/

Class.extend({

	get: function(name) {
		name = name.trim();
		name = name.split('.');
		var func = window;
		for (var i = 0; i < name.length; i++) func = func[name[i]];
		return typeof func == 'function' ? func : null;
	},

	from: function(name) {
		var klass = Class.get(name);
		if (klass) {
			var params = Array.prototype.slice.call(arguments, 1);
			params.unshift(klass);
			return Class.instanciate.apply(this, params);
		}
		throw new TypeError('Class "' + name + '" not found.');
	},

	instanciate: function(klass) {
		klass.$prototyping = true;
		var instance = new klass;
		delete klass.$prototyping;
		var params = Array.prototype.slice.call(arguments, 1);
		if (instance.initialize) {
			instance.initialize.apply(instance, params);
		}		
		return instance;
	}

});

