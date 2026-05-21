import express from "express";
import { query } from "./firebirdconfig"; // Importando a função que criamos

const app = express();
app.use(express.json());

// Rota de exemplo para listar registros
app.get("/api/dados", async (req, res) => {
    try {
        // Exemplo de SELECT no Firebird 4.0
        const result = await query("SELECT FIRST 10 * FROM CA_PRODUTO");
        return res.json(result);
    } catch (error) {
        return res.status(500).json({
            error: "Erro ao conectar no Firebird",
            details: error
        });
    }
});

app.get("/health", (req, res) => {
    return res.status(200).json({
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

export { app };