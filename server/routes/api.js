const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/HotelBookingDB', (err, db) => {
        if (err) return console.log(err);
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    console.log("error"+err);
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get Hotel
router.get('/Hotel', (req, res) => {
    console.log("Inside jjkhgkjhd");
    connection((db) => {
        db.collection('Hotel')
           .find({$or:[{Address:req.query.location},{City:req.query.location}]})
            .toArray()
            .then((Hotel) => {
                response.data = Hotel;
                res.json(response);
                console.log(Hotel)
            })
            .catch((err) => {
                sendError(err, res);
            });
        });
    });

            router.get('/getHotelDetails', (req, res) => {
                
                 console.log("==============:"+req.query);
                  connection((db) => {
                      db.collection('Hotel')
                          .find({_id:{$eq:req.query.id}})
                          .toArray()
                          .then((Hotel) => {
                              response.data = Hotel;
                              res.json(response);
              
                             console.log(Hotel)
                          })
                          .catch((err) => {
                              sendError(err, res);
            });
    });
});

module.exports = router;