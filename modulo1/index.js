const express = require('express');

const server = express();

// Para aceitar body em formato json
server.use(express.json());

//Middleware de log
server.use((req,res, next) => {
    console.log(`Método: ${req.method}; URL: ${req.url}`);

    //para continuar
    return next();
});

//Middleware para verificiar se foi passado um nome de usuário
function checkUserExists(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: 'User not found on request body'});
    }

    return next();
}

//Middleware para verificiar se foi passado um index de usuário
function checkUserInArray(req, res, next) {
    const user = users[req.params.index];

    if (!user) {
        return res.status(400).json({ error: 'User does not exists'});
    }

    //Adicionando uma nova variável na requisição que pode ser usada abaixo
    req.user = user;

    return next();
}

const users = ['Eduardo', 'Luiz', 'Victor']

// Query params - Buscar todos os usuários
server.get('/users', checkUserInArray, (req, res) => {
    return res.json(users);
});

// Route params - Buscar usuário pelo index
server.get('/users/:index', checkUserInArray, (req, res) => {
    return res.json(req.user);
});


server.post('/users', checkUserExists, (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

server.put('/users/:index', checkUserExists, checkUserInArray, (req,res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
});

server.delete('/users/:index', checkUserInArray, (req,res) => {
    const { index } = req.params;

    //Percorre o vetor até a posição informada e apaga o número informado de itens
    users.splice(index, 1);

    //apenas para dizer que deu certo
    return res.send();
})

server.listen(3000);