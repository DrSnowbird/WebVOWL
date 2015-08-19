webvowl.nodes.owlthing = (function () {

	var o = function (graph) {
		webvowl.nodes.TopOrBottomNode.apply(this, arguments);

		this.label("Thing")
			.type("owl:Thing")
			.iri("http://www.w3.org/2002/07/owl#Thing");
	};
	o.prototype = Object.create(webvowl.nodes.TopOrBottomNode.prototype);
	o.prototype.constructor = o;

	return o;
}());
