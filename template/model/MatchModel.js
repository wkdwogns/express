var mongoose = require('mongoose');

//db 스키마 정의 (컬렉션이 가지고있는 속성정의)
var matchSchema = mongoose.Schema({
	homeTeam : {type: String},
	matchDay : {type: String},
	location : {type: String},
	skill: {type: String},
	comment : {type: String}
});

module.exports = mongoose.model('matches',matchSchema); //database에 있는 users컬렉션과 uSchema와 매칭
