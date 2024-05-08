import User from '../Models/userModel.js'
import bcrypt from 'bcrypt'

export const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    const token = newUser.createJWT()
    res.status(201).json({newUser:{email:newUser.email, name:newUser.name},token});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      

      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.remove();
      res.json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const loginUser = async(req,res)=>{
  const {email,password} = req.body

  try{
    const user = await User.findOne({email:email}).select('+password')
    if(!user){
      return res.status(401).json({message:"Login failed"})
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
      return res.status(401).json({message:"invalid email or pass"})
    }

    const token = user.createJWT()
    
    res.status(200).json({user:{email:user.email, name:user.name, role: user.role},token});
  }
  catch(err){
    res.status(500).json({message:err.message})
  }
  

}