import prisma from "../prisma"

class Cocktail {
    constructor(){
    }

    static async postCocktail(body: any){
        const { englishName, japaneseName, cost, image} = body
        const cocktail = await prisma.cocktail.create({
            data: {
                englishName,
                japaneseName,
                cost,
                image
            }
        })
        return cocktail
    }


    static async getCocktails(){
        const cocktails = await prisma.cocktail.findMany()
        return cocktails
    }
}

export default Cocktail