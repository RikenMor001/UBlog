

const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

const signupBody = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(8),
})

app.use(express.json());

app.post("/signup", async (req, res) => {
  const body = req.body;
  if( !body ){
    return res.status(400).json({
      message: "The request body is empty"
    })
  }

  const exisitingUser = await User.findOne({
    name: body.name,
    email: body.email,
  })
  if ( exisitingUser ){
    return res.status(400).json({
      message: "User already exists"
    })
  }

  const user = await User.create({
    name: body.name,
    email: body.email,
    password: body.password,
  })

  if ( user ){
    return res.status(200).json({
      message: "User created successfully"
    })
  }
});

app.post("signin", (req, res) => {
  const body = req.body;
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
