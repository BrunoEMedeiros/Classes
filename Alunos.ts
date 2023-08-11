
//criando uma classe
export class Alunos{
    nome: string;
    idade: number;
    altura: number;
    cor_cabelo: string;
    cpf: string;

    constructor(_nome, _idade, _altura, _cor_cabelo, _cpf){
        this.nome = _nome;
        this.altura = _altura;
        this.idade = _idade;
        this.cor_cabelo = _cor_cabelo;
        this.cpf = _cpf;
    }
}
//criando um objeto
let aluno = new Alunos('bruno',24,1.79,'castanho','123');
console.log(aluno);