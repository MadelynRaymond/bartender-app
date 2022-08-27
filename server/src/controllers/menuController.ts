import { RequestHandler } from "express";
import Cocktail from "../models/cocktail";

const getCocktailMenu: RequestHandler = async (req, res) => {
    const cocktails = await Cocktail.getCocktails()
    res.status(200).send(cocktails)
}

const postCocktail: RequestHandler = async (req, res) => {
    const cocktail = await Cocktail.postCocktail(req.body)
    res.status(201).send(cocktail)
}

export { getCocktailMenu, postCocktail }