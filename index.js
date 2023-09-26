class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {

        if (this.tipo == 'mago') {
            console.log(`A ${this.nome} é um ${this.tipo} e atacou usando magia`);
        } else if (this.tipo == 'guerreiro') {
            console.log(`A ${this.nome} é um ${this.tipo} e atacou usando uma espada`);
        } else if (this.tipo == 'monge') {
            console.log(`A ${this.nome} é um ${this.tipo} e atacou usando artes marciais`);
        } else if (this.tipo == 'ninja') {
            console.log(`A ${this.nome} é um ${this.tipo} e atacou usando uma shuriken`);
        } else {
            console.log(`Não identifiquei o tipo do seu herói.`)
        }

    }
}

const hero1 = new hero('Bia', '29', 'mago')
hero1.atacar()
