var carModel = require('../model/Model.js');

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
        carModel.find(function(err, cars){
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
        var id = req.params.id;
        carModel.findOne({_id: id}, function(err, car){
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

        var car = new carModel({
			       userid : req.query.userid,
			       name : req.query.name
        });

        car.save(function(err, car){
            if(err) {
                return res.status(500).json({
                    message: 'Error saving car',
                    error: err
                });
            }

            carModel.find(function(err, cars){
	            if(err) {
	                return res.status(500).json({
	                    message: 'Error getting car.'
	                });
	            }
	            return res.json(cars);
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
        carModel.findOne({_id: id}, function(err, car){
            if(err) {
                return res.status(500).json({
                    message: 'Error saving car',
                    error: err
                });
            }
            if(!car) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }

            car.color =  req.body.color ? req.body.color : car.color;

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

        carModel.findByIdAndRemove(id, function(err, car){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting car.'
                });
            }
            return res.json(car);
        });
    }
};
