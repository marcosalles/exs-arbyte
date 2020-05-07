
var fs = require('fs');

function fazLasanha() {
	return 'lasanha';
}

var lasanhasSerializadas = JSON.stringify(fazLasanha);

fs.writeFileSync('data/funcao.json', lasanhasSerializadas);
