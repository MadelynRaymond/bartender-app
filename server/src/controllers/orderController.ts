import { RequestHandler } from "express";
import Order from "../models/order";

const postOrder: RequestHandler = async (req, res) => {
    const order = await Order.postOrder(req.body)
    res.status(201).send(order)
}


const getOrders: RequestHandler = async (req, res) => {
    const orders = await Order.getOrders()
    res.status(200).send(orders)
}

export { postOrder, getOrders }



