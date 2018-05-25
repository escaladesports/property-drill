import propDrill from '../dist'

const obj = {
	a: {
		b: true,
		c: false,
		d: 'asdf',
	},
	d: 5,
	e: {
		f: [1, 2, 3],
	},
}

describe(`Property drill`, () => {
	it(`Should find object property`, () => {
		expect(
			propDrill(obj, `a`, `b`)
		).toEqual(true)
	})
	it(`Should find array value`, () => {
		expect(
			propDrill(obj, `e`, `f`, 1)
		).toEqual(2)
	})
	it(`Should be undefined if no args`, () => {
		expect(
			propDrill(obj)
		).toEqual(undefined)
	})
	it(`Should be undefined if too deep`, () => {
		expect(
			propDrill(obj, `a`, `c`, `z`, 5)
		).toEqual(undefined)
	})
})