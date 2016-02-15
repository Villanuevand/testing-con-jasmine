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
	describe('Comparador "toBeFalsy()"', function() {
		it('"toBeFalsy" debería ser aplicado para comparar contra el valor boleano de una variable, undefined o not defined', function() {
			var a = 12, b = "True para strings no vacios";
			expect(false).toBeFalsy();
			expect(null).toBeFalsy();
			expect(true).not.toBeFalsy();
			expect("Jasmine Cookbook").not.toBeFalsy();
			expect(a).not.toBeFalsy();
			expect(b).not.toBeFalsy();
		});
	});
	describe('Comparador "toContain()', function() {
		it('"toContain" deberia ser aplicado para encontrar un item en un array', function() {
			var miArray = ['Jasmine','Cookbook', 'Javascript'];
			expect([1,2,3]).toContain(2);
			expect([1,2,3]).toContain(2,3);
			expect(miArray).toContain('Javascript');
			expect([1,3,4]).not.toContain(2);
			expect(miArray).not.toContain('C#');
		});
	});
	describe('Comparador "toBeLessthan()"', function() {
		it('"toBeLessThan" deberia ser aplicado para comparaciones matemáticas', function() {
			var PI = Math.PI, g = 9.71, num1 = 5, num2 = 9;
			expect(PI).toBeLessThan(g);
			expect(num1).toBeLessThan(num2);
			expect(g).not.toBeLessThan(PI);
			expect(num2).not.toBeLessThan(num1);
		});
	});
	describe('Comparador "toBeGreaterThan()"', function() {
		it('"toBeGreaterThan" deberia ser aplicado para comparaciones matemáticas', function() {
			var PI = Math.PI, g = 9.71, num1 = 5, num2 = 9;
			expect(g).toBeGreaterThan(PI);
			expect(num2).toBeGreaterThan(num1);
			expect(PI).not.toBeGreaterThan(g);
			expect(num1).not.toBeGreaterThan(num2);
		});
	});
	describe('Comparador "toBeCloseTo()"', function() {
		it('"toBeCloseTo" deberia ser aplicado para comparaciones matemáticas precisas.', function() {
			var pi = Math.PI, e = 2.78;
			expect(pi).not.toBeCloseTo(e);
			expect(pi).toBeCloseTo(e,0);
			expect(4.334).toBeCloseTo(4.334);
			expect(4.334).toBeCloseTo(4.3345,1);
			expect(4.334).toBeCloseTo(4.3345,2);
			expect(4.334).not.toBeCloseTo(4.3,2);
			expect(4.223).not.toBeCloseTo(4.22,3);
			expect(4.223).not.toBeCloseTo(4.22,4);
		});
	});
	describe('Comparador "toThrow"()', function() {
		it('"toThrow" se utiliza para conocer si una funcion arroja una excepción.', function() {
			var foo = function () {
				return 1 + 2;
			};
			var bar = function () {
				return a + 2;
			};
			expect(foo).not.toThrow();
			expect(bar).toThrow();
		});
	});
	describe('Comparador "toThrowError()"', function() {
		it('"toThrowError" se utiliza para conocer si una excepción puntual es arrojada.', function() {
			var foo = function () {
				throw new TypeError('foo bar baz');
			};

			expect(foo).toThrowError('foo bar baz');
			expect(foo).toThrowError(/bar/);
			expect(foo).toThrowError(TypeError);
			expect(foo).toThrowError(TypeError,'foo bar baz');
		});
	});

});
