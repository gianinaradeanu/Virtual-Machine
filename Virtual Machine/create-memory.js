const createMemory = sizeInBites=>{
	const ab = new ArrayBuffer(sizeInBites);
	const dv = new DataView(ab);
	return dv;
};

module.exports = createMemory;