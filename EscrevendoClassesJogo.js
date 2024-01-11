class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Exemplo de uso com laço de repetição
const numeroDeIteracoes = 5;

const herois = [
    new Heroi("mago1", 1500, "Mago"),
    new Heroi("guerreiro1", 35, "Guerreiro"),
    new Heroi("monge1", 30, "Monge"),
    new Heroi("ninja1", 28, "Ninja")
];

for (let i = 0; i < numeroDeIteracoes; i++) {
    console.log(`### Iteração ${i + 1} ###`);

    for (const heroi of herois) {
        heroi.atacar();
    }

}
