const tamanhoTexto = 'Andre'.length;
console.log('O tamanho do texto é:', tamanhoTexto);

const splitTexto = 'Andre'.split('d');
console.log('\nArray com posição separadas pelo delimitador:', splitTexto);

const replaceTexto = 'Andre'.replace('r', 'l');
console.log('\n Trocando o texto:', replaceTexto);

const ultimaLetra = 'Andre'.slice(-1);
console.log('\n Ultima letra:', ultimaLetra);

const todasLetras = 'Andre'.slice(0, -1);
console.log('\n Todas letra:', todasLetras);

const segundaLetra = 'Andre'.slice(1);
console.log('\n Ultima letra:', segundaLetra);

const duasPrimeirasLetras = 'Andre'.substring(0,2);
console.log('\n Duas primeiras letras:', duasPrimeirasLetras);

//numeros

const numeros = 14.3450;

const transformandoEmString = numeros.toString();
console.log('\n Numeros transformados em String', typeof transformandoEmString);

const doisDecimais = numeros.toFixed(2);
console.log('\n com dois decimais', doisDecimais);

console.log('\n Float', parseFloat('13.22'));

console.log('\n Int', parseInt('13.22'));

//null

const variavelNull = null;
console.log('\n Null', variavelNull)

//indefinido

let naoDefinido;
console.log('\n não definido', naoDefinido)

//boleano

const verdadeiro = true;
const falso = false;

console.log('\n tipo da variavel é:', verdadeiro, 'do tipo', typeof verdadeiro)

//object

let user = {
    name: "Guilherme"
}
console.log(user.name);

user.name = "André"
console.log(user.name);

user['name'] = "Patrícia";
console.log(user.name);

const novo = 'name';
user[novo] = 'Teobaldo';
console.log(user.name);

user.lastName = 'Reis Santos';
user.Age = 38;

delete user.name;

console.log(user);

Object.assign(user, {fullName: 'André Luís Reis Santos'});
Object.assign({}, user, {peso: '85kg'});

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const congelar = {objeto: 'congelado'}
congelar.boleano = true;
console.log(congelar);
Object.freeze(congelar);
congelar.numero = 5;
delete congelar.objeto;

console.log(congelar);

const carro = {marca: 'Fiat'}
Object.seal(carro);
carro.marca = 'Nissan';
carro.motor = '1.6'
delete carro.marca;

console.log(carro);

//Symbols

const symbols = Symbol('name');
const symbols2 = Symbol('name');

const user2 = {
[symbols]: 'André', [symbols2]: 'Patricia', lastName: 'Freire e Reis'
}

console.log(user2)
console.log(Object.getOwnPropertySymbols(user2))





