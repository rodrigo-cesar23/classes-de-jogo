class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === 'mago') {
            console.log(`${this.tipo} atacou usando magia`);
        } else if (this.tipo === 'guerreiro') {
            console.log(`${this.tipo} atacou usando espada`);
        } else if (this.tipo === 'monge') {
            console.log(`${this.tipo} atacou usando artes marciais`);
        } else if (this.tipo === 'ninja') {
            console.log(`${this.tipo} atacou usando shuriken`);
        }
    }
}

const heroi = new Heroi('rod', 22, 'ninja');

heroi.atacar();