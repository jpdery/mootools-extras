/*
---

name: Class.Mutator.Protected

description: Add a mutator for protected methods.

license: MIT-style license.

requires:
	- Core/Class
	- Core/Class.Extras

provides:
	- Class.Mutator.Protected

...
*/

Class.Mutators.Protected = function(items){
    for (var fn in items) {
        if (items[fn] instanceof Function && !items[fn]._protected){
            items[fn] = items[fn].protect();
        }
    }
    this.implement(items);
};