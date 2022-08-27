import prisma from "../prisma"

class StaffMember {
    constructor(){
    }
    static async postStaffMember(body: any){
        let staff
        const { username, password } = body
        staff = await prisma.staffMember.create({
            data: {
                username,
                password
            }
        })
        return staff
    }

    static async getLogin(){

    }

}

export default StaffMember