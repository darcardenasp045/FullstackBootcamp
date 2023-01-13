//con Let se puede reasiganr los valores de la variable en cualquier momento,
//el Scope de la variable depende de las llaves que se estan usando, 
//no se puede usar la variable por fuera del scope, por consiguiente se pueden delacara variabloes con el mismo nombre en diferentes scopes, esto permite facilidad al momento de programar.
let firstName = 'Daniel'

//es una constante, por consiguiente no se puede alterar a lo largo del codigo, es perfecta para funciones
const array = 2

//no se debe usar por es una variable que no tiene scope, funciona en todo el codigo,esto la hace dificil de usar.
var secondName = 'Armando'

////////////////////////////////////////

//Tipos

//NUmber
2

//String
//Es inmutable
"hola mundo"

//Booleanos
true false

//Indefinido
undefined

//Nulos
null

///Objetos

const persona = {
    name: "Daniel",
    age: 31,
    twitter: "@darcardenasp",
    links: ['www.facebook.com', 'www.instagram.com']
}

const hola = persona.links[0];
console.log(hola);

//Funciones

//funcion Expresion

const sumar = (a, b) => {
    console.log(a)
    console.log(b)
    return a + b
}
console.log(sumar(3,2))

// Funciones declarativas

function restar ( a, b){
    return a - b
}