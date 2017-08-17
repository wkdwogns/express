var matchModel = require('../model/MatchModel.js');

/**
 * TeamController.js
 *
 * @description :: Server-side logic for managing teams.
 */
module.exports = {

    /**
     * TeamController.list()
     */
    list: function(req, res) {
        matchModel.find(function(err, data){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting car.'
                });
            }
            return res.json(data);
        });
    },

    /**
     * TeamController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        matchModel.findOne({_id: id}, function(err, car){
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
     * TeamController.create()
     */
    create: function(req, res) {

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

            matchModel.find(function(err, cars){
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
     * TeamController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        matchModel.findOne({_id: id}, function(err, car){
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
			      car.door =  req.body.door ? req.body.door : car.door;

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

        matchModel.findByIdAndRemove(id, function(err, car){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting car.'
                });
            }
            return res.json(car);
        });
    }
};
