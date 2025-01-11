
import User from "../model/user.model.js";

export const signup = async(req, res) => {
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

    const newUser = new User({
        username,
        email,
        password
    })

    await newUser.save();
    res.json({message: "User created successfully"})
}
