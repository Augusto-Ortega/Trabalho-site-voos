const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt'); // Para criptografar a senha
const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota para processar o registro
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    // Criptografando a senha
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro ao criptografar a senha.' });
        }

        // Salvando os dados no arquivo users.txt
        const userData = `${email},${hashedPassword}\n`;
        fs.appendFile('users.txt', userData, (err) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Erro ao salvar os dados.' });
            }

            return res.json({ success: true, message: 'Usuário registrado com sucesso!' });
        });
    });
});

// Servindo os arquivos estáticos (HTML, CSS, etc.)
app.use(express.static(__dirname));

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
