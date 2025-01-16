
import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
export default function SignUp(){
  return <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
      <div>
      <Link to="/" className=" font-bold dark:text-white text-4xl"> 
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg text-white">
                UBlog
            </span>
        </Link> 
        <p className="text-sm mt-5">
            This is a demo project.You can sign up with your email and password or with Google. 
        </p>   
      </div>

      <div className="">
        <form>
          <div>
            <Label value="Your username"/>
            <TextInput 
            type="text"
            placeholder="Username"
            id="username"
            />
          </div>
        </form>
      </div>

    </div>
  </div>
}
