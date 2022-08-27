import { RequestHandler } from "express";
import StaffMember from "../models/staffMember";

const postStaffMember: RequestHandler = async (req, res) => {
    const staff = await StaffMember.postStaffMember(req.body)

    res.status(201).send(staff)
}

const getStaffLogin: RequestHandler = async (req, res) => {
    await StaffMember.getLogin()
}

export { postStaffMember, getStaffLogin }