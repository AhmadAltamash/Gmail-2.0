import jwt from 'jsonwebtoken'

export const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log(token)
        if(!token) {
            return res.status(401).json({ msg: 'No token, authorization denied' });
        }
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decoded) {
            return res.status(401).json({ msg: 'Token is invalid' });
        }
        req.id = decoded.userId;
        next();
    } catch (error) {
        console.log(error)
    }
}