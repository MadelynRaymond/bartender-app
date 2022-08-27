"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.postOrder = void 0;
const order_1 = __importDefault(require("../models/order"));
const postOrder = async (req, res) => {
    const order = await order_1.default.postOrder(req.body);
    res.status(201).send(order);
};
exports.postOrder = postOrder;
const getOrders = async (req, res) => {
    const orders = await order_1.default.getOrders();
    res.status(200).send(orders);
};
exports.getOrders = getOrders;
//# sourceMappingURL=orderController.js.map