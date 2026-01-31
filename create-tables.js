import { sql } from "./db.js";

async function createTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS videos (
        id          TEXT PRIMARY KEY,
        title       TEXT,
        description TEXT,
        duration    INTEGER
      );
    `;
    console.log("Tabela Criada com sucesso!");
  } catch (error) {
    console.error("Erro ao criar tabela:", error);
  }
}

createTable();