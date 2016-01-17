var Calculadora = {
	actual : 0,
	sumar : function () {
		var resultado = this.actual;
		var l = arguments.length;
		for(var i = 0; i < l; i++){
			resultado += arguments[i];
		}
		this.actual = resultado;
		return resultado;
	},
	restar : function () {
		var resultado = this.actual;
		var l = arguments.length;
		for(var i = 0; i < l; i++){
			resultado -= arguments[i];
		}
		this.actual = resultado;
		return resultado;
	},
	reset : function () {
		this.actual = 0;
	}

}