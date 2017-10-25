const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const configJwt = require('../config/jwt');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbConfig = require('../config/db');
const connectionString = (dbConfig.user && dbConfig.password)
  ? `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.url}`
  : `mongodb://${dbConfig.url}`;

// Connect
const connection = (closure) => {
  return MongoClient.connect(connectionString, (err, db) => {
    if (err) return console.log(err);

    closure(db);
  });
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err === 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

router.post('/auth/login', (req, res) => {
  connection((db)=>{
    const user = {
      username: req.body.username,
      password: req.body.password
    };
    db.collection('users').findOne(user)
      .then((result) => {
        const token = jwt.sign({
          id: result._id,
          username: result.username
        }, configJwt.jwtSecret);
        response.data = { token: token };
        res.json(response);
      })
      .catch((err) => {
        res.status(401).send({"error": "Username is invalid"});
      });
  })
});

router.post('/auth/signup', (req, res) => {
  connection((db)=>{
    const user = {
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    };
    db.collection('users').findOne(user)
      .then((result) => {
        if(!result){
          db.collection('users').insertOne(user)
        }
        res.status(401).send({"error": "Username is unavailable"});
      })

  })
});
// Get users
router.get('/users', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((users) => {
        response.data = users;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

module.exports = router;
