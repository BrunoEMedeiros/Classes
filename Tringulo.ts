class Triangulo{
    a: number;
    b: number;
    c: number;

    constructor(_a: number, _b: number, _c: number){
        this.a = _a;
        this.b = _b;
        this.c = _c;
    }

    Area(base: number, altura: number){
        return (base * altura) / 2
    }
}

let t = new Triangulo(1,2,3);
let area = t.Area(t.a, t.b)
console.log(area);