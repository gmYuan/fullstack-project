module.exports = {
  sum(a, b) {
    return a + b;
  },

	mul(a, b) {
		return a * b
	},

	init({option, param}) {
		console.log('----开始init执行流程----', option, param)
	}
};

