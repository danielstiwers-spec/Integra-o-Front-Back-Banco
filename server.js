import express from 'express';
import sqlite3 from 'sqlite3';
const db_sqlite3 = sqlite3.verbose();
const app = express();
app.use(express.urlencoded({ extended: true }));
const db = new db_sqlite3.Database('./daniel.db'); // Use o nome exato do seu arquivo
app.post('/salvar', (req, res) => {
const { nome, telefone, email } = req.body;
const sql = `INSERT INTO contatos (nome, telefone, email) VALUES (?, ?, ?)`;

db.run(sql, [nome, telefone, email], function(err) {
if (err) return res.send("Erro: " + err.message);
res.send("<h1>Sucesso!</h1><p>Contato salvo no banco.</p><a href='/'>Voltar</a>");
});
});
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));