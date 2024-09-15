import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()
const jwtkey = process.env.JWTKEY;
async function authtoken(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ msg: "unauthorized" });
        }
        const verified = jwt.verify(token, jwtkey);
        if (!verified) {
            return res.status(401).json({ msg: "unauthorized" });
        }
        req.id = verified.id;
        req.username = verified.username;
        next();
    } catch (error) {
        console.log(error);
        
        res.status(401).json({ msg: "error",error });
    }
   
}

export default authtoken