"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../prisma"));
class StaffMember {
    constructor() {
    }
    static async postStaffMember(body) {
        let staff;
        const { username, password } = body;
        staff = await prisma_1.default.staffMember.create({
            data: {
                username,
                password
            }
        });
        return staff;
    }
    static async getLogin() {
    }
}
exports.default = StaffMember;
//# sourceMappingURL=staffMember.js.map