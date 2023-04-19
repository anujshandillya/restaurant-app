import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

export const register = async( req, res ) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            location,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash( password, salt );

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            location,
        });
        const savedUser = await newUser.save();
        res.status(301).json(savedUser);
    } catch(e) {
        res.status(500).json( { error : e.message } );
    } 
};

export const login = async ( req, res ) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne( { email: email } );
        if( !user ) return res.status(400).json( { message: "User does not exist. " });

        const isMatch = await bcrypt.compare( password, user.password );
        if( !isMatch ) res.status(400).json( { message: "Invalid Credentials. " } );

        const token = jwt.sign( { id: user._id }, process.env.JWT_TOKEN );
        delete user.password;
        res.status(200).json( { user, token } );
    }catch(e) {
        res.status(500).json( { error: e.message } );
    }
};