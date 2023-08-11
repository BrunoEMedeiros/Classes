import { Alunos } from "./Alunos";

class Moveis{
    material: string;
    preco: number;
    cor: string;
    marca: string;

    constructor(_material, _preco, _cor, _marca){
        this.material = _material;
        this.cor = _cor;
        this.marca = _marca;
        this.preco = _preco;
    };
}
let cadeira = new Moveis('madeira',20,'preta','sla');
cadeira.cor = 'vermelho';
console.log(cadeira)

let teste = new Alunos('bruno',12,1.60,'preto','321')
console.log(teste);