import { User } from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        if(!fullname || !email || !password) return res.status(400).json({message: "All Field Are Required"});
        
        const user = await User.findOne({email});

        if(user) return res.status(401).json({messsage: "This email already exist"});

        const profilePhoto = 'https://avatar.iran.liara.run/public/boy';

        await User.create({
            fullname,
            email,
            password: await bcrypt.hash(password, 10),
            profilePhoto
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
        if(!email || !password) return res.status(400).json({message: "All Field Are Required"});
        
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({messsage: "User Does Not Exist"});

        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch) return res.status(402).json({message: 'Password is incorrect'})

        const tokenData = {
            userId: user._id
        }
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn: '1d'});
        console.log(token);
        return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpOnly: true, sameSite: 'strict'}).json({
            message: "User logged in successfully",
            user
        })
    } catch (error) {
        console.log(error)
    }
}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message: "User logged out successfully",
        }) 
    } catch (error) {
        console.log(error)
    }
}