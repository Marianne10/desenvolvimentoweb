import { Request, Response } from "express";
import { Produto } from "../models/product.model";

export const getProdutos = async (req: Request, res: Response) => {
    try {
        const produtos = await Produto.findAll();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar produtos." });
    }
};

export const createProduto = async (req: Request, res: Response) => {
    try {
        const { nome, preco } = req.body;
        const produto = await Produto.create({ nome, preco });
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar produto." });
    }
};
