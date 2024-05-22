import nodemailer from "nodemailer"

export default async function ContactAPI(rep, res) {
    const { name, email, tel, comment} = rep.body
    
    const data = {
        name, email, tel, comment
    }
    

    return res.status(200).json({ message: "success" })
}
