//Inicio da definição da classe -----------
var Cumprimento = /** @class */ (function () {
    //Método construtor
    function Cumprimento(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
    //outro Método
    Cumprimento.prototype.mostrarNomeIdade = function (idade, nome) {
        return "A pessoa " + nome + " tem " + idade + " anos";
    };
    return Cumprimento;
}());
//Fim da definição da classe -----------------
//Invocando a função e o resultado vou armazenar na variavel de memoria chamada resposta -------------------
var resposta = new Cumprimento("", ""); //Serve para criar o objeto - Inicializamos com vazio
console.log(resposta.mostrarNomeIdade("29", "Gabriel")); //Utilizando um método do objeto resposta.
