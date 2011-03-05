/*
---

name: Class.Mutator.Static

description: Add a mutator for static methods.

license: MIT-style license.

requires:
	- Core/Class
	- Core/Class.Extras

provides:
	- Class.Mutator.Static

...
*/

Class.Mutators.Static = function(items){
    this.extend(items);
};