import { Router } from "express";
import { getFornecedores, createFornecedor } from "../controllers/fornecedor.controller";

const router = Router();

router.get("/", getFornecedores); // Rota para listar todos os fornecedores
router.post("/", createFornecedor); // Rota para criar um novo fornecedor

export default router;
