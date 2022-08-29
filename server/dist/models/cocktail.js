"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../prisma"));
class Cocktail {
    constructor() {
    }
    static async postCocktail(body) {
        const { englishName, japaneseName, price, img, icon } = body;
        const cocktail = await prisma_1.default.cocktail.create({
            data: {
                englishName,
                japaneseName,
                price,
                img,
                icon
            }
        });
        return cocktail;
    }
    static async getCocktails() {
        const cocktails = await prisma_1.default.cocktail.findMany();
        return cocktails;
    }
}
exports.default = Cocktail;
//# sourceMappingURL=cocktail.js.map