var mongoose    = require('mongoose');

//db 스키마 정의 (컬렉션이 가지고있는 속성정의)
var uSchema = mongoose.Schema({
	userid: {type: String},
	name : {type: String},
	team : {type: String},
	skill: {type: String},
	team : {type: String},
	position : {type: String }
});

module.exports = mongoose.model('articles',uSchema); //database에 있는 users컬렉션과 uSchema와 매칭
