// self executing anonymous function
//This is a technique used to limit variable scope; it's the only way to prevent variables from polluting the global namespace.
(function() {
     function sayHello(){
     alert("Hello tutorialspointexamples.com");
     }

	var Person = {

		init: function() {
			this.form = $('#form');
			this.bindEvents();
		},

		bindEvents: function() {
			this.form.on('submit', $.proxy(this.showName, this));
		},

		showName: function(event) {
			event.preventDefault();

			alert(this.form.find('input[type=text]').val());
		}
	}

	Person.init();

})();