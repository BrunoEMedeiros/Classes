
class Retangulo{
    //Atributos
    x: number;
    y: number;

    //Metodo construtor 
    constructor(lado_um: number, lado_dois: number){
        this.x = lado_um;
        this.y = lado_dois;
    }

    //Metodo que exibe a area
    Area(){
        console.log(this.x * this.y)
    }
}
let caixa_um = new Retangulo(3,2);
let caixa_dois = caixa_um;
caixa_dois = new Retangulo(2,5);
caixa_dois.x = 4;
caixa_um.Area();
