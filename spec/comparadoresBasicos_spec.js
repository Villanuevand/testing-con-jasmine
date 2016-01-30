describe('Jasmine Matchers (Comparadores) Básicos', function() {
	// Comparadores Básicos
	describe('Comparador "toMach()"', function() {
		it('"toMatch" debería ser aplicado para expresiones regulares', function() {
			expect(Comparadores.jasmine).toMatch(/Cookbook/);
			expect(Comparadores.jasmine).toMatch(/cookbook/i);
			expect(Comparadores.jasmine).not.toMatch(/Java/);
			expect(Comparadores.telefono).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
		});
	});

	describe('Comparador "toEqual()"', function() {
		it('Si los números son iguales', function() {
			expect(Comparadores.unNumero).toEqual(16);
		});
		it('Si las cadenas string son iguales', function() {
			var strVar = 'Jasmine Cookbook';
			expect(Comparadores.jasmine).toEqual('Jasmine Cookbook');
		});
		it('Si los objetos son iguales', function() {
			var objetoTest = {a: 50, b: 60};
			expect(Comparadores.unObjeto).toEqual(objetoTest);
			expect(Comparadores.unObjeto.a).toEqual(objetoTest.a);
			expect(Comparadores.unObjeto.a).not.toEqual(objetoTest.b);
		});
		it('Si los arreglos son iguales', function() {
			var arregloTest = [2,4,8];
			expect(Comparadores.unArray).toEqual(arregloTest);
			expect(Comparadores.unArray).not.toEqual([8, 9, 10]);
		});
	});

});