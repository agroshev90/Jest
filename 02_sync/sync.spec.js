const Lodash = require('./sync')

let _ = new Lodash

describe('Lodash compact', function () {
	let array

	beforeEach(() => {
		array = [false, 42, 0, '', true, null, 'hi']
	})

	afterAll(() => {
		_ = new Lodash()
	})

	test('should be defined', () => {
		expect(_.compact).toBeDefined()
		expect(_.compact).not.toBeUndefined()
	})

	test('should remove falsy values from array', () => {
		expect(_.compact(array)).toEqual([42, true, 'hi'])
	})

	test('should not contain falsy values', () => {
		expect(_.compact(array)).not.toContain([false, null, '', 0])
	})
});

describe('Lodash groupBy', function () {
	test('should be defined', () => {
		expect(_.groupBy).toBeDefined()
		expect(_.groupBy).not.toBeUndefined()
	})

	test('should group items by Math.floor', () => {
		const array = [2.2, 2.5, 2.9, 4.3, 3.1]
		const result = {
			2: [2.2, 2.5, 2.9],
			4: [4.3],
			3: [3.1]
		}
		expect(_.groupBy(array, Math.floor)).toEqual(result)
	})

	test('should group items by length', () => {
		const array = ['one', 'two', 'three']
		const result = {
			3: ['one', 'two'],
			5: ['three']
		}
		expect(_.groupBy(array, 'length')).toEqual(result)
	})

	test('should not to return the array', () => {
		expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
	})
})

