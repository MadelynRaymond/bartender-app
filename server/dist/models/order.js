"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../prisma"));
class Order {
    constructor() {
    }
    static async postOrder(body) {
        const { contains } = body;
        const order = await prisma_1.default.order.create({
            data: {
                contains: {
                    create: contains.map((item) => ({
                        quantity: item.quantity,
                        cocktail: {
                            connect: {
                                cocktailId: item.cocktailId,
                            }
                        }
                    }))
                }
            }
        });
        return order;
    }
    static async getOrders() {
        const orders = await prisma_1.default.order.findMany({
            include: {
                contains: {
                    select: {
                        cocktail: true,
                        quantity: true
                    }
                }
            }
        });
        return orders;
    }
}
exports.default = Order;
//# sourceMappingURL=order.js.map