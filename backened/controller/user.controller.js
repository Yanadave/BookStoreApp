import User from "../model/user.model.js";
import bcrypt from "bcrypt";

//SIGNUP KE LIYE 

export const signup= async (req,res)=>{
     try {
        const { fullname, email, password } = req.body;

        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User Already Exists"})
        }
        //PASSWORD KO HASH FORM MAI RKHNE KE LIYE
        const hashPassword=await bcrypt.hash(password,10)
        // data create hua
        const createdUser=new User({
            fullname: fullname,
            email: email,
            password:hashPassword,
        });
        //data save krne ke liye 
       await  createdUser.save()
        res.status(201).json({message:"user created successfully",user:{
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email,
        }});

     } catch (error) {
        console.log("Error: "+error.message)
        res.status(500).json({message:"Internal serval error"})
     }
};

// LOGIN KE LIYE AB

export const login=async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});

        //user jo password bhejra h usko user ke actual password(database wala password) se compare krne ke liye
        const isMatch=await bcrypt.compare(password,user.password)
        if(!user || !isMatch)
        {
            return res.status(400).json({message:"Invalid username or password"});
        }else{
            res.status(200).json({message:"Login Successful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}