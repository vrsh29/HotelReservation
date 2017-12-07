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
    // console.log("Inside jjkhgkjhd");
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
               // console.log("Inside db ");
                 console.log("==============:"+req.query.id);
                  connection((db) => {
                      db.collection('Hotel')
                          .find({id:parseInt(req.query.id)})
                          .toArray()
                          .then((Hotel) => {
                              response.data = Hotel;
                              res.json(response.data);
              
                             console.log(response.data+"mjnonllnlnml");
                          })
                          .catch((err) => {
                              sendError(err, res);
            });
    });
});
// router.post('/updateCustomer', urlencodedParser, (req, res) => {
    
// //  console.log("==============:"+req.body.custname);
    
//       connection((db) => {
//        // console.log("==============:"+req.body.name);
//           db.collection('customer').insert({name:req.body.name,address:req.body.address,zipcode:req.body.pin,city:req.body.city})
//           .then((customer) =>{
//             console.log("=customer=======:"+customer);
//             response.data = customer;
//             res.json(response);;
//           }
//         )
        
//       });
//   });

module.exports = router;