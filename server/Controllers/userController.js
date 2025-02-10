import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        if(fullname || email || password) return res.status(400).json({message: "All Field Are Required"});
        
        const user = await User.findOne({email});

        if(user) return res.status(401).json({messsage: "This email already exist"});

        await User.create({
            fullname,
            email,
            password: await bcrypt.hash(password, 10)
        });

        return res.status(200).json({
            message: "User created successfully",
            success: true,
        });
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(email || password) return res.status(400).json({message: "All Field Are Required"});
        
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({messsage: "User Does Not Exist"});

        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch) return res.status(402).json({message: 'Password is incorrect'})

        await User.create({
            fullname,
            email,
            password: await bcrypt.hash(password, 10)
        });

        return res.status(200).json({
            message: "User created successfully",
            success: true,
        });
    } catch (error) {
        console.log(error)
    }
}