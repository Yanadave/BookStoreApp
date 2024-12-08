import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

//MSG POPUP KE LIYE 
import toast from 'react-hot-toast';

function Login() {
    const location = useLocation();  // Get the current location
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit =async (data) => {
        const userInfo = {
            
            email: data.email,
            password:data.password,
          }
          //info ko store krne ke liye API ko call krege or uske liye axios ka use kreege
          await axios.post("http://localhost:4001/user/login",userInfo)
          .then((res)=>{
            console.log(res.data)
            if(res.data)
            {
              
              toast.success('LogedIn Successfully');
              document.getElementById('my_modal_3').close();

              setTimeout(()=>{
                window.location.reload();
                localStorage.setItem("Users",JSON.stringify(res.data.user));
              },1000)
                
            }
          }).catch((err) => {
            if(err.response){
              console.log(err);
              
              toast.error("Error: " +err.response.data.message);
              setTimeout(()=>{},2000);
            }
          });
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box dark:bg-slate-800 dark:text-white ">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                       {/* Conditional rendering based on the current route */}
            {location.pathname === '/' ? (
              // Close button without redirection on the home page
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>
                ✕
              </button>
            ) : (
              // Link to home page when not on the home page
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            )}
                        
                        <h3 className="font-bold text-lg">Login</h3>

                        {/* email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input 
                                type='email'
                                placeholder='Enter your email'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            <br/>
                            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input 
                                type='password'
                                placeholder='Enter your password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("password", { required: true })}
                            />
                            <br/>
                           {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                        </div>

                        {/* button */}
                        <div className='flex justify-around mt-4'>
                            <button 
                                type="submit" 
                                className='bg-violet-700 text-white rounded-lg px-3 py-1 hover:bg-violet-800 duration-200'>
                                Login
                            </button>
                            <p>Not Registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
