
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async(req, res) => {
    try {
        const {username, email, password} = req.body;
    
        if (!username && !email && !password && username == "" || email == "" || password == "") {
            res.status(400).json({message: "Please fill all the fields"})
        }
    
        const user = await User.findOne({
            username: username,
            email: email
        })

        if ( user ){
            res.status(400).json({message: "Username or email already exists"})
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
        console.log("The error is: " + error);
    }
} 
