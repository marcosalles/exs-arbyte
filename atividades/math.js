
class Matematica {
	soma(n1, n2) {
		return n1 + n2;
	}

	subtracao(n1, n2) {
		return n1 - n2;
	}

	multiplicacao(n1, n2) {
		return n1 * n2;
	}

	divisao(n1, n2) {
		return n1 / n2;
	}
}

var math = new Matematica();
module.exports = math;
