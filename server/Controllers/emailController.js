import { Email } from "../models/emailModel.js";

export const createEmail = async (req, res) => {
    try {
        const userId = req.id;
        const { to, subject, message} = req.body;
        if(!to || !subject || !message) return res.status(400).json({msg: 'All fields are mandatory'});

        const email = await Email.create({
            to,
            subject,
            message,
            userId
        });
        return res.status(201).json({
            msg: 'Email created successfully',
            email
        });
    } catch (error) {
        console.log(error)
    }
}

export const deleteEmail = async (req, res) => {
    try {
        const emailId = req.params.id;
        if(!emailId) return res.status(401).json({msg: 'email id does not exist'});

        const email = await Email.findByIdAndDelete(emailId);
        if(!email) return res.status(402).json({msg: 'email does not exist'});

        return res.status(201).json({msg: 'Email deleted successfully'});
    } catch (error) {
        console.log(error);
    }
}

export const getEmail = async (req, res) => {
    try {
        const userId = req.id;
        const emails = await Email.find({userId});
        if(!emails) return res.status(404).json({msg:"no email found"});

        return res.status(201).json({emails})
    } catch (error) {
        console.log(error);
    }
}