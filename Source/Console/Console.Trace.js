/*
---

name: Console.Trace

description: Provide a trace method that allow multiple arguments and check
             if console.log exists before executing.

license: MIT-style license.

author:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:

provides:
	- Console.Trace

...
*/

if (!window.console) window.console = {};

window.trace = window.console.trace = function() {
	if (console) Array.from(arguments).each(function(a) { console.log(a) });
}
