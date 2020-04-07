const express = require('express');
const router = express.Router();
const User = require('./../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const createError = require('http-errors');

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
  } = require('./../helpers/middleware');

  //  POST    '/login'
router.post('/login', isNotLoggedIn, validationLoggin, async (req, res, next) => {  
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }) ;
    if (!user) {
      next(createError(404));
    } 
    else if (bcrypt.compareSync(password, user.password)) {
      req.session.currentUser = user;
      res
        .status(200)
        .json(user);
      return 
    } 
    else {
      next(createError(401));
    }
  } 
  catch (error) {
    next(error);
  }
},
);

//  POST    '/signup'
router.post('/signup', isNotLoggedIn, validationLoggin, async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const usernameExists = await User.findOne({ username }, 'username');
    
    if (usernameExists) return next(createError(400));
    else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPass = bcrypt.hashSync(password, salt);
      const newUser = await User.create({username, password: hashPass });
      req.session.currentUser = newUser;
      res
        .status(200)  //  OK
        .json(newUser);
    }
  } 
  catch (error) {
    next(error);
  }
},
);
//		routes/auth.js

//  POST    '/logout'
router.post('/logout', isLoggedIn, (req, res, next) => {
  req.session.destroy();
  res
    .status(204)  //  No Content
    .send();
  return; 
});

module.exports = router;  