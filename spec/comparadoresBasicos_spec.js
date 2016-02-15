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
		it('"toBe deberia ser aplicado para comparar variables literales y objetos sean de igual valor', function() {
			expect(Comparadores.unNumero).toEqual(16);
			var strVar = 'Jasmine Cookbook';
			expect(Comparadores.jasmine).toEqual('Jasmine Cookbook');
			var objetoTest = {a: 50, b: 60};
			expect(Comparadores.unObjeto).toEqual(objetoTest);
			expect(Comparadores.unObjeto.a).toEqual(objetoTest.a);
			expect(Comparadores.unObjeto.a).not.toEqual(objetoTest.b);
			var arregloTest = [2,4,8];
			expect(Comparadores.unArray).toEqual(arregloTest);
			expect(Comparadores.unArray).not.toEqual([8, 9, 10]);
		});
	});

	describe('Comparador "toBe()"', function() {
		it('"toBe deberia ser aplicado para comparar variables literales y objetos sean el mismo objeto.', function() {
			var objetoTest = {a: 50, b: 60};
			var arregloTest = [2,4,8];
			expect(Comparadores.unObjeto).toBe(Comparadores.unObjeto);
			expect(Comparadores.unObjeto).not.toBe(objetoTest);
			expect(Comparadores.unObjeto).toEqual(objetoTest);
			expect(Comparadores.jasmine).toBe("Jasmine Cookbook");
			expect(Comparadores.unArray).toEqual([2, 4, 8]);
			expect(Comparadores.unArray).not.toBe([8, 9, 10]);
		});
				
	});
	describe('Comparador "toBeDefined"()', function() {
		it('"toBeDefined deberia ser aplicado para comparar contra "defined"', function() {
			var fakeVar;
			expect('Jasmine Cookbook').toBeDefined();
			expect(Comparadores).toBeDefined();
			expect(Comparadores.unNumero).toBeDefined();
			expect(Comparadores.unaFuncion).not.toBeDefined();
			expect(fakeVar).not.toBeDefined();
		});
	});
	describe('Comparador "toBeUndefined()"', function() {
		it('"toBeUndefined" deberia ser aplicado para compara contrar conta "undefined"', function() {
			var fakeVar;
			expect(Comparadores).not.toBeUndefined();
			expect(Comparadores.unNumero).not.toBeUndefined();
			expect(Comparadores.unaFuncion).toBeUndefined();
			expect(fakeVar).toBeUndefined();
		});
	});
	describe('Comparador "toBeNull()', function() {
		it('Deberia ser aplicado para comparar contra "null"', function() {
			var valueUndefined;
			expect(null).toBeNull();
			expect(Comparadores.nulleable).toBeNull();
			expect(valueUndefined).not.toBeNull();
			expect(Comparadores.lorem).not.toBeNull();
		});
	});
	describe('Comparador "toBeTruthy()"', function() {
		it('"toBeTruthy" debería ser aplicado para comparar contra el valor boleano de una variable', function() {
			// a = undefined ; foo = "foo"
			var a, foo = "foo";
			expect(true).toBeTruthy();
    		expect(foo).toBeTruthy();
    		expect(a).not.toBeTruthy();
		});
	});

});
