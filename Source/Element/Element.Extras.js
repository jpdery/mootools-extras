/*
---

name: Element.Extras

description: Provides extra methods for the element class.

license: MIT-style license.

requires:
	- Core/Element

provides:
	- Element.Extras

...
*/

Element.implement
({
	disposeProperty: function(property) {
		this.store('property_' + property, null);
		this.store('property_' + property, this.getProperty(property));
		this.removeProperty(property);
		return this;
	},

	getDisposedProperty: function(property) {
		return this.retrieve('property_' + property);
	},

	ingest: function(string) {
		var match = string.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
		if (match) string = match[1];
		this.set('html', string);
		return this
	},
	
	getInsides: function() {
		return Array.from(this.childNodes);	
	}
});
