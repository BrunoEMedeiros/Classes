interface iProduto{
    nome: string,
    preco: number,
    qtd: number
}

class Carrinho{
    forma_pgt: string;
    produtos: iProduto[];

    constructor(pgt: string, lista: iProduto[]){
        this.forma_pgt = pgt;
        this.produtos = lista;
    }
}

let mouses: iProduto = {
    nome: 'mouse',
    preco: 20.50,
    qtd: 3
}

let carrinho: Carrinho = new Carrinho('cartao',
[
    {nome: 'chinelo', preco: 10, qtd: 1},
    {nome: 'cobertor', preco: 100, qtd: 2},
    mouses
])

console.log(carrinho)





/*
//JS 
let produto = {
    nome: 'chiclete',
    preco: 2.20,
    qtd: 1
}
*/