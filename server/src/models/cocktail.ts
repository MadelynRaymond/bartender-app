import prisma from "../prisma"

class Cocktail {
    constructor(){
    }

    static async postCocktail(body: any){
        const { englishName, japaneseName, price, img, icon} = body
        const cocktail = await prisma.cocktail.create({
            data: {
                englishName,
                japaneseName,
                price,
                img,
                icon
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