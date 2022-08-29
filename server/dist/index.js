"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const staffController_1 = require("./controllers/staffController");
const menuController_1 = require("./controllers/menuController");
const orderController_1 = require("./controllers/orderController");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: '*'
}));
app.use(express_1.default.json());
const port = 8080;
app.post('/Staff', staffController_1.postStaffMember);
app.get('/Login', staffController_1.getStaffLogin);
app.get('/Cocktails', menuController_1.getCocktailMenu);
app.post('/Cocktails', menuController_1.postCocktail);
app.get('/Orders', orderController_1.getOrders);
app.post('/Orders', orderController_1.postOrder);
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
//# sourceMappingURL=index.js.map