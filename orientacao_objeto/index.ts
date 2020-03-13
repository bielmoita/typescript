//Inicio da definição da classe -----------
class Cumprimento
{
    //Atributos --> Jeito é--> nome do atributo : tipo
    nome:string;
    idade:string;

    //Método construtor
    constructor(_nome:string="", _idade:string="")
    {
        this.nome=_nome;
        this.idade=_idade;
    }

    //outro Método
    mostrarNomeIdade(idade:string, nome:string)
    {
        return `A pessoa ${nome} tem ${idade} anos`
    };
}
//Fim da definição da classe -----------------

//Invocando a função e o resultado vou armazenar na variavel de memoria chamada resposta -------------------

let resposta = new Cumprimento() //Serve para criar o objeto - Inicializamos com vazio
console.log(resposta.mostrarNomeIdade("29","Gabriel")) //Utilizando um método do objeto resposta.
