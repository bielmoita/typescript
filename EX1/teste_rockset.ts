interface Pessoa {
    nome: string
    idade: number
  }
  
  function bomDia (pessoa: Pessoa): string {
    return `Bom-dia ${pessoa.nome}`;
  }
  
  function maiorDeIdade (pessoa: Pessoa): boolean {
    return pessoa.idade >= 18;
  }