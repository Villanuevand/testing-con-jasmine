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

	describe('Comparador "toBe()"', function() {
		var objetoTest = {a: 50, b: 60};
		var arregloTest = [2,4,8];
		it('Si el objeto es él mismo', function() {
			expect(Comparadores.unObjeto).toBe(Comparadores.unObjeto);
		});
		it('Si el objeto no es él mismo', function() {
			expect(Comparadores.unObjeto).not.toBe(objetoTest);
		});
		it('Deberian ser iguales', function() {
			expect(Comparadores.unObjeto).toEqual(objetoTest);
		});
		it('Deberian se igual en valor', function() {
			expect(Comparadores.jasmine).toBe("Jasmine Cookbook");
		});
		it('Son iguales en valor', function() {
			expect(Comparadores.unArray).toEqual([2, 4, 8]);
		});
		it('No  deberian ser iguales en tipo', function() {
			expect(Comparadores.unArray).not.toBe([8, 9, 10]);
		});
				
	});
	describe('Comparador "toBeDefined"()', function() {
		var fakeVar;
		it('Si "Jasmine Cookbook" está definido', function() {
			expect('Jasmine Cookbook').toBeDefined();
		});
		it('Si el objeto "Comparadores" esá definido', function() {
			expect(Comparadores).toBeDefined();
		});
		it('Si Comparadores.unNumero está definido', function() {
			expect(Comparadores.unNumero).toBeDefined();
		});
		it('Si Comparadores.unFuncion NO está definido (undefined)', function() {
			expect(Comparadores.unaFuncion).not.toBeDefined();
		});
		it('Si la variable "fakeVariable no está definida"', function() {
			expect(fakeVar).not.toBeDefined();
		});
	});
	describe('Comparador "toBeUndefined()"', function() {
		var fakeVar;
		it('Si el objeto "Comparadores" no es indefinido', function() {
			expect(Comparadores).not.toBeUndefined();
		});
		it('Si Comparadores.unNumero no es indefinido', function() {
			expect(Comparadores.unNumero).not.toBeUndefined();
		});
		it('Si Comparadores.unFuncion es indefinido', function() {
			expect(Comparadores.unaFuncion).toBeUndefined();
		});
		it('Si la variable "fakeVariable es indefinida"', function() {
			expect(fakeVar).toBeUndefined();
		});
		
	});

});