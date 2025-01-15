
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async(req, res,next) => {
    try {
        const {username, email, password} = req.body;
    
        if (!username && !email && !password && username == "" || email == "" || password == "") {
            next(errorHandler(400, "Kindly fill all the fields"))
        }
    
        const user = await User.findOne({
            username: username,
            email: email
        })

        if ( user ){
            next(errorHandler(400, "User already exists"))
        }  
    
        const hashedPassword = await bcryptjs.hashSync(password, 10);
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        })

        await newUser.save();
        res.json({message: "User Signed up successfully"})
    } catch (error){
        next(error);
    }
} 
