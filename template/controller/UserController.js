var userModel = require('../model/UserModel.js');

/**
 * carController.js
 *
 * @description :: Server-side logic for managing cars.
 */
module.exports = {

    /**
     * carController.list()
     */
    list: function(req, res) {
        userModel.find(function(err, cars){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting car.'
                });
            }
            return res.json(cars);
        });
    },

    /**
     * carController.show()
     */
    show: function(req, res) {

        var id = req.body.id;
        console.log(req);
        userModel.findOne({_id: id}, function(err, car){
          console.log(car);
            if(err) {
                return res.status(500).json({
                    message: 'Error getting car.'
                });
            }
            if(!car) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }
            return res.json(car);
        });
    },

    /**
     * carController.create()
     */
    create: function(req, res) {
    	console.log(req.query);
    	console.log(req.baseUrl); // /greet
    	console.log(req.body); //post 로 보낼때
    	console.log(req.hostname);
    	console.log(req.originalUrl);

        var user = new userModel({
			       userid : req.body.id,
             password : req.body.password,
			       name : req.body.name,
             email : req.body.email,
             phone : req.body.phone
        });

        user.save(function(err, user){
            if(err) {
                return res.status(500).json({
                    message: 'Error saving car',
                    error: err
                });
            }

            userModel.find(function(err, users){
	            if(err) {
	                return res.status(500).json({
	                    message: 'Error getting car.'
	                });
	            }
	            return res.json(users);
	        });

            /*return res.json({
                message: 'saved',
                _id: car._id
            });*/
        });
    },

    /**
     * carController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function(err, user){
            if(err) {
                return res.status(500).json({
                    message: 'Error saving car',
                    error: err
                });
            }
            if(!user) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }

            user.color =  req.body.color ? req.body.color : car.color;
			      user.door =  req.body.door ? req.body.door : car.door;

            userid : req.body.id,
            password : req.body.password,
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone

            car.save(function(err, car){
                if(err) {
                    return res.status(500).json({
                        message: 'Error getting car.'
                    });
                }
                if(!car) {
                    return res.status(404).json({
                        message: 'No such car'
                    });
                }
                return res.json(car);
            });
        });
    },

    /**
     * carController.remove()
     */
    remove: function(req, res) {
        var id = req.query.id;

        userModel.findByIdAndRemove(id, function(err, car){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting car.'
                });
            }
            return res.json(car);
        });
    }
};
