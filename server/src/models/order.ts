import prisma from "../prisma"

class Order {
    constructor(){
    }
    static async postOrder(body: any){
       const { contains } = body
        const order = await prisma.order.create({
            data: {
              contains: {
                create: contains.map((item: {cocktailId: number, quantity: number}) =>({
                    quantity: item.quantity,
                    cocktail: {
                        connect: {
                            cocktailId: item.cocktailId,
                        }
                    }
                }))
              }
            }
        })
        return order
    }

    static async getOrders(){
        const orders = await prisma.order.findMany({
            include: {
                contains: {
                    select: {
                        cocktail: true,
                        quantity: true
                    }
                }
            }
        })
        return orders
    }

}

export default Order