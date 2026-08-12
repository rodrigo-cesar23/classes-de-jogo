# ⚔️ Classes de um Jogo

🇧🇷 Português | 🇺🇸 English

---

# 🇧🇷 Português

## 📖 Sobre o projeto

Projeto desenvolvido como parte do desafio **Escrevendo as Classes de um Jogo** da **Digital Innovation One (DIO)**.

O objetivo do projeto é criar uma classe capaz de representar um herói de uma aventura, contendo informações como nome, idade e tipo.

Além disso, a classe possui um método chamado `atacar()`, responsável por determinar o ataque utilizado pelo herói de acordo com o seu tipo.

O projeto foi desenvolvido utilizando conceitos de **Programação Orientada a Objetos (POO)** em JavaScript.

---

## ⚔️ Tipos de heróis e ataques

Cada tipo de herói possui um ataque específico:

| Tipo de Herói | Ataque |
| ------------- | ------ |
| Mago | Magia |
| Guerreiro | Espada |
| Monge | Artes marciais |
| Ninja | Shuriken |

O método `atacar()` verifica o tipo do herói e exibe uma mensagem informando qual ataque foi utilizado.

### Exemplo

```text
ninja atacou usando shuriken
```

---

## 🧩 Estrutura da classe

A classe `Heroi` possui três propriedades principais:

- `nome` — nome do personagem
- `idade` — idade do personagem
- `tipo` — tipo do herói

Além disso, possui o método:

```javascript
atacar()
```

Esse método utiliza estruturas condicionais para determinar o ataque correspondente ao tipo do personagem.

---

## 🚀 Tecnologias utilizadas

- JavaScript
- Node.js
- Git
- GitHub
- Visual Studio Code

---

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto, foram praticados os seguintes conceitos:

- Variáveis
- Operadores
- Funções
- Parâmetros
- Estruturas condicionais (`if` e `else if`)
- Classes
- Objetos
- Construtores
- Propriedades
- Métodos
- `this`
- Instanciação de objetos com `new`
- Template literals
- Saída de dados com `console.log()`

---

## ▶️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/rodrigo-cesar23/classes-de-jogo.git
```

### 2. Entre na pasta do projeto

```bash
cd classes-de-jogo
```

### 3. Execute o programa

```bash
node index.js
```

---

## 💻 Exemplo de funcionamento

Considerando um herói com os seguintes dados:

- Nome: `Rod`
- Idade: `22`
- Tipo: `ninja`

O objeto é criado através de:

```javascript
const heroi = new Heroi("rod", 22, "ninja");
```

Em seguida, o método de ataque é chamado:

```javascript
heroi.atacar();
```

Como o tipo do herói é `ninja`, o programa identifica o ataque correspondente.

### Saída

```text
ninja atacou usando shuriken
```

---

## 📁 Estrutura do projeto

```text
📦 classes-de-jogo
 ├── index.js
 └── README.md
```

---

## 👨‍💻 Autor

Desenvolvido por **Rodrigo César**.

🔗 GitHub: https://github.com/rodrigo-cesar23

🔗 LinkedIn: https://www.linkedin.com/in/rodrigo-cesarsf

---

# 🇺🇸 English

## 📖 About the project

Project developed as part of the **Writing Game Classes** challenge from **Digital Innovation One (DIO)**.

The goal of this project is to create a class capable of representing a hero in an adventure, containing information such as name, age, and type.

The class also includes a method called `atacar()`, responsible for determining the attack used by the hero according to their type.

The project was developed using **Object-Oriented Programming (OOP)** concepts in JavaScript.

---

## ⚔️ Hero types and attacks

Each hero type has a specific attack:

| Hero Type | Attack |
| --------- | ------ |
| Mage | Magic |
| Warrior | Sword |
| Monk | Martial arts |
| Ninja | Shuriken |

The `atacar()` method checks the hero's type and displays a message indicating which attack was used.

### Example

```text
ninja attacked using shuriken
```

---

## 🧩 Class structure

The `Heroi` class contains three main properties:

- `nome` — character's name
- `idade` — character's age
- `tipo` — hero's type

It also contains the following method:

```javascript
atacar()
```

This method uses conditional statements to determine the attack corresponding to the character's type.

---

## 🚀 Technologies used

- JavaScript
- Node.js
- Git
- GitHub
- Visual Studio Code

---

## 📚 Concepts practiced

During the development of this project, the following concepts were practiced:

- Variables
- Operators
- Functions
- Parameters
- Conditional statements (`if` and `else if`)
- Classes
- Objects
- Constructors
- Properties
- Methods
- `this`
- Object instantiation with `new`
- Template literals
- Output using `console.log()`

---

## ▶️ How to run

### 1. Clone the repository

```bash
git clone https://github.com/rodrigo-cesar23/classes-de-jogo.git
```

### 2. Enter the project folder

```bash
cd classes-de-jogo
```

### 3. Run the program

```bash
node index.js
```

---

## 💻 Example

Considering a hero with the following information:

- Name: `Rod`
- Age: `22`
- Type: `ninja`

The object is created using:

```javascript
const heroi = new Heroi("rod", 22, "ninja");
```

Then, the attack method is called:

```javascript
heroi.atacar();
```

Since the hero's type is `ninja`, the program identifies the corresponding attack.

### Output

```text
ninja attacked using shuriken
```

---

## 📁 Project structure

```text
📦 classes-de-jogo
 ├── index.js
 └── README.md
```

---

## 👨‍💻 Author

Developed by **Rodrigo César**.

🔗 GitHub: https://github.com/rodrigo-cesar23

🔗 LinkedIn: https://www.linkedin.com/in/rodrigo-cesarsf
