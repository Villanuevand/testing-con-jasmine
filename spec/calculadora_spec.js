describe('Calculadora', function() {
	/*
	* Cada vez que inicie la prueba, se establecerá
	* el valor de "Calculadora.actual" en 0.
	*/
	beforeEach(function () {
		Calculadora.actual = 0;
	});

	describe('Cuando se sumen números', function() {
		it('deberia almacenar el valor actual siempre', function() {
			expect(Calculadora.actual).toBeDefined();
			expect(Calculadora.actual).toEqual(0);
		});

		it('deberia sumar numeros', function() {
			expect(Calculadora.sumar(5)).toEqual(5);
			expect(Calculadora.sumar(5)).toEqual(10);
		});

		it('deberia sumar cualquier cantidad de numeros', function() {
			expect(Calculadora.sumar(1,2,3)).toEqual(6);
			expect(Calculadora.sumar(1,2,3,4)).toEqual(16);
		});
	});

	describe('Cuando se resten números', function() {
		it('deberia restar cualquier cantidad de numeros', function() {
			expect(Calculadora.restar(5)).toEqual(-5);
		});
	});

	it('deberia limpiar el valor "actual"', function() {
		Calculadora.sumar(5);
		Calculadora.reset();
		expect(Calculadora.actual).toEqual(0); 

		Calculadora.sumar(4);
		Calculadora.sumar(9);
		expect(Calculadora.actual).toEqual(13);

		Calculadora.reset();
		expect(Calculadora.actual).toEqual(0);
	});
});