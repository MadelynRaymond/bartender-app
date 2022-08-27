"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCocktail = exports.getCocktailMenu = void 0;
const cocktail_1 = __importDefault(require("../models/cocktail"));
const getCocktailMenu = async (req, res) => {
    const cocktails = await cocktail_1.default.getCocktails();
    res.status(200).send(cocktails);
};
exports.getCocktailMenu = getCocktailMenu;
const postCocktail = async (req, res) => {
    const cocktail = await cocktail_1.default.postCocktail(req.body);
    res.status(201).send(cocktail);
};
exports.postCocktail = postCocktail;
//# sourceMappingURL=menuController.js.map