import express, { NextFunction, Request, Response } from "express";
import UserModel from "../model/userModel";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const registerUser = async (req : Request, res : Response, next : NextFunction) =>
{
    try{
        const user = await UserModel.findOne({ email : req.body.email });
        if(user)
        {
            res.status(400).json("User Already exists!");
        } else {
            const { name, email, password, confirmPassword } = req.body;
            if(password != confirmPassword) {
                return res.send("Password and Confirm Passoword is no matching");
            }
            else {
                const hashedPassword = await bcrypt.hash(password, 12);   
                const newUser = await UserModel.create({
                name : name,
                email : email,
                password : hashedPassword
                });

                const token = await jwt.sign({_id : newUser._id }, process.env.secretKey as jwt.Secret, {
                expiresIn : '1d'
                })

                res.status(201).json({
                status: 'success',
                token,
                data: {
                    user: newUser,
                },});
            }
    }
    } catch (err) {
        console.error(err);
    }
}

export const login = async(req : Request, res : Response, next : NextFunction) =>
{
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if(!user) {
           return res.status(404).json({ message : "User is not exist"});
        }

        const IsAuthenticated = await bcrypt.compare(password, user.password);
        if(!IsAuthenticated)
        {
            return res.status(400).json({message : "Email or Password in Incorrect"});
        }

        const token = jwt.sign({ _id : user._id }, process.env.secretKey as jwt.Secret, {
            expiresIn : '1d',
        });

        res.status(200).json({
            token : token,
            id : user._id,
            user : user.email,
            message : "You are logged in Succesfully"
        });

    } catch (err) {
        console.error(err);
    }
   
}