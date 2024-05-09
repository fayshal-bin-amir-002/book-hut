import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

    const { userLogin, googleLogIn } = useAuth();

    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        toast.success('Logged in');
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh - 104px)] py-6 md:py-8 lg:py-12">
            <form onSubmit={handleSubmit} className="w-[90%] md:w-2/3 lg:w-[600px] bg-[#8DECB4] p-6 lg:p-10 rounded-lg shadow-lg bg-opacity-30">
                <label className="input input-bordered rounded-full flex items-center gap-2 focus:outline-none mb-6 lg:mb-8">
                    Email
                    <input type="email" name="email" className="grow focus:outline-none" />
                </label>
                <label className="input input-bordered rounded-full flex items-center gap-2 focus:outline-none relative mb-8 lg:mb-12">
                    Password
                    <input name="password" type={show ? 'text' : 'password'} className="grow focus:outline-none" />
                    <span onClick={() => setShow(!show)} className="absolute right-5 bottom-3 text-2xl cursor-pointer">
                        {
                            show ? <IoIosEye /> : <IoIosEyeOff />
                        }
                    </span>
                </label>
                <button className="btn w-full rounded-full bg-[#41B06E] text-white text-lg border-none">Login</button>
                <p className="mt-3">Don&apos;t have an account? <Link to='/register' className="text-[#41B06E] underline font-semibold">Register</Link></p>
                <div className="divider"></div>
                <div className="flex justify-center flex-col items-center gap-4">
                    <button><img src="/google.png" alt="" className="w-10" /></button>
                    <p className="font-medium opacity-80">Continue With Google</p>
                </div>
            </form>
        </div>
    );
};

export default Login;