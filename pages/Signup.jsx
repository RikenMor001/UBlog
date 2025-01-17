
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp(){
  const [ formData, setFormData ] = useState({});

  const  handleClick  = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("../api/auth/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      });
      if (res.status === 200){
        // Navigate the user to signin page 
      }
    }catch(error){
      console.error("There was an error from the backend" + error)
    }
  }

  return <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
      <div className="flex-1">
      <Link to="/" className=" font-bold dark:text-white text-4xl"> 
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg text-white">
                UBlog
            </span>
        </Link> 
        <p className="text-sm mt-5">
            This is a demo project.You can sign up with your email and password or with Google. 
        </p>   
      </div>

      <div className="flex-1">
        <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
          <div>
            <Label value="Your username"/>
            <TextInput 
            type="text"
            placeholder="Username"
            id="username"
            onChange={ handleClick }
            />
          </div>

          <div>
            <Label value="Your email"/>
            <TextInput 
            type="email"
            placeholder="something@email.com"
            id="email"
            onChange={ handleClick }/>
          </div>

          <div>
            <Label value="Your password"/>
            <TextInput 
            type="password"
            placeholder="Password"
            id="password"
            onChange={ handleClick }
            />
          </div>
          
          <Button gradientDuoTone="purpleToPink" type="submit">
            Sign up
          </Button>
        </form>
        <div className="mt-5">
          <span>
            Have an account?
            <Link to="/signin" className="text-sm text-blue-500 hover:pointer hover:text-blue-700">
              Sign in
            </Link>
          </span>
        </div>
      </div>

    </div>
  </div>
}
