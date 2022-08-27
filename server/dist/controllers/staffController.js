"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaffLogin = exports.postStaffMember = void 0;
const staffMember_1 = __importDefault(require("../models/staffMember"));
const postStaffMember = async (req, res) => {
    const staff = await staffMember_1.default.postStaffMember(req.body);
    res.status(201).send(staff);
};
exports.postStaffMember = postStaffMember;
const getStaffLogin = async (req, res) => {
    await staffMember_1.default.getLogin();
};
exports.getStaffLogin = getStaffLogin;
//# sourceMappingURL=staffController.js.map