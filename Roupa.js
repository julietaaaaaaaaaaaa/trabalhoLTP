class LojaDeRoupas{
    constructor(id,nome, tamanho, cor, quantidade){
        this.id= id;
        this.nome= nome;
        this.tamanho= tamanho;
        this.cor= cor;
        this.quantidade= quantidade;
    }
//a
adicionar_roupa(novoNome,novoTamanho,novaCor,novaQuantidade){
    this.nome= novoNome
    this.tamanho=novoTamanho
    this.cor= novaCor
    this.quantidade= novaQuantidade
}
//b
remover_roupa(id){
if(this.id == id){
console.log("Removido com sucesso")
}else{
    console.log("Item não removido")
}
}
//c
atualizar_quantidade(){
    this.id = 1
    this.quantidade = 12
}
//d
listar_roupas(){
    this.id= 1
    this.nome= "vestido"
    this.tamanho= "G"
    this.cor= "preto"
    this.quantidade= 10
}
//e
buscar_roupa_por_nome(){
this.nome= "vestido"
}






}
let roupas = new LojaDeRoupas (1,"","","",0);
//roupas.adicionar_roupa("vestido", "G","preto",10);
//console.log(roupas)
//roupas.remover_roupa(1);
//console.log(roupas)
//roupas.atualizar_quantidade();
//console.log(roupas)
//roupas.listar_roupas();
//console.log(roupas)
roupas.buscar_roupa_por_nome();
console.log(roupas)