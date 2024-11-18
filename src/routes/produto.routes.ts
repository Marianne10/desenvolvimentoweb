import { Router } from "express";
import { getProdutos, createProduto } from "../controllers/produto.controller";

const router = Router();

router.get("/", getFornecedores); // Rota para listar todos os fornecedores
router.post("/", createFornecedor); // Rota para criar um novo fornecedor

export default router;
