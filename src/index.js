function propDrill() {
	let obj = arguments[0]
	let l = arguments.length
	let last = l - 1
	let i
	let part
	for (i = 1; i < l; i++) {
		part = arguments[i]
		if (typeof obj[part] === 'object') {
			obj = obj[part]
			continue
		}
		if (i === last) {
			return obj[part]
		}
		return
	}
}

module.exports = propDrill