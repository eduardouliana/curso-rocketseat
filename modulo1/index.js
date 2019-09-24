const express = require('express');

const server = express();

// Para aceitar body em formato json
server.use(express.json());

const users = ['Eduardo', 'Luiz', 'Victor']

// Query params - Buscar todos os usuários
server.get('/users', (req, res) => {
    return res.json(users);
});

// Route params - Buscar usuário pelo index
server.get('/users/:index', (req, res) => {
    const { index } = req.params;
    return res.json(users[index]);
});


server.post('/users', (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

server.put('/users/:index', (req,res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
});

server.delete('/users/:index', (req,res) => {
    const { index } = req.params;

    //Percorre o vetor até a posição informada e apaga o número informado de itens
    users.splice(index, 1);

    //apenas para dizer que deu certo
    return res.send();
})

server.listen(3000);