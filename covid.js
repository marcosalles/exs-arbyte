
var table = document.createElement('table');
var principal = document.querySelector('div#principal');
principal.append(table);

var thead = document.createElement('thead');
var trCabecalho = document.createElement('tr');

var thEstado = document.createElement('th');
thEstado.innerText = 'Estado';
var thCasos = document.createElement('th');
thCasos.innerText = 'Casos confirmados';
var thObitos = document.createElement('th');
thObitos.innerText = 'Óbitos';

trCabecalho.append(thEstado, thCasos, thObitos);
thead.append(trCabecalho);
table.append(thead);

let tbody = document.createElement('tbody');
table.append(tbody);

const apiDoCovid = 'https://covid19-brazil-api.now.sh/api/report/v1';

axios.get(apiDoCovid)
	.then((resposta) => {
		let estados = resposta.data.data;
		tbody.innerHTML = '';
		estados.forEach((uf) => {
				let trCorpo = document.createElement('tr');
				let tdEstado = document.createElement('td');
				// tdEstado.setAttribute('class', 'estado')
				// tdEstado.classList.add('estado')
				// tdEstado.classList.add('abobora')
				// tdEstado.className = 'estado abobora'
				tdEstado.innerText = uf.state;
				let tdCasos = document.createElement('td');
				tdCasos.innerText = uf.cases;
				let tdObitos = document.createElement('td');
				tdObitos.innerText = uf.deaths;
			
				trCorpo.append(tdEstado, tdCasos, tdObitos);
				tbody.append(trCorpo);
			});
		});

/*
	<table>
		<thead> OK
			<tr> OK
				<th>Estado</th> OK
				<th>Casos confirmados</th> OK
				<th>Óbitos</th> OK
			</tr>
		</thead>
		<tbody>
			<tr> OK
				<td class='abobrinha'>São Paulo</td> OK
				<td>150</td> OK
				<td>3</td> OK
			</tr>
		</tbody>
	</table>
*/