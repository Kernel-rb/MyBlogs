const bcrypt = require('bcryptjs');
const HttpError = require("../models/errorModel");
const User = require('../models/userModel');

// ================= register user =================
// Post : api/users/register
// Unprotected
const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, password2 } = req.body;
        if (!name || !email || !password || !password2) {
            return next(new HttpError('All fields are required 🦊', 422));
        }
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name)) {
            return next(new HttpError('Please enter a valid name 🦊', 422));
        }
        const newName = name.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        const nameExist = await User.findOne({ name: newName });
        if (nameExist) {
            return next(new HttpError('Name already exists 🦊', 422));
        }

        const newEmail = email.toLowerCase();
        const emailExist = await User.findOne({ email: newEmail });

        if (emailExist) {
            return next(new HttpError('Email already exists 🦊', 422));
        }

        if ((password.trim()).length < 6) {
            return next(new HttpError('Password should be at least 6 characters long 🦊', 422));
        }

        if (password !== password2) {
            return next(new HttpError('Passwords do not match 🦊', 422));
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({ name, email: newEmail, password: hashedPassword });
        res.status(201).json(`${newUser.name} is registered successfully 🦊`);
    } catch (error) {
        console.error('Error registering user:', error);
        return next(new HttpError('Registering user failed, please try again 🦊', 422));
    }
}


// ================= Login user =================
// Post : api/users/login
// Unprotected
const loginUser = async (req, res, next) => {
    try {
        
    } catch (error) {
        console.error('Error logging in user:', error);
        return next(new HttpError('Logging in user failed, please try again 🦊', 422));
    }
}

// =================  user profile =================
// Post : api/users/:id 
// protected
const getUser = async (req, res, next) => {
    res.json('This is the get user profile route');
}

// ================= change user avaatr =================
// Post : api/users/change-avatar
// protected
const chnageAvatar = async (req, res, next) => {
    res.json('This is the chnage avatr of user route');
}


// ================= change user details =================
// Post : api/users/edit-user
// protected
const editUser = async (req, res, next) => {
    res.json('This is the change the user detail route');
}

// ================= Get uthors=================
// Post : api/users/authors
// Unprotected
const getAuthors = async (req, res, next) => {
    res.json('Get all Authorss route');
}



module.exports = {registerUser, loginUser, getUser, chnageAvatar, editUser, getAuthors};