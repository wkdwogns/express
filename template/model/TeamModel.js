var mongoose = require('mongoose');

//db 스키마 정의 (컬렉션이 가지고있는 속성정의)
var teamSchema = mongoose.Schema({
	teamName: {type: String},
	win : {type: String},
	draw : {type: String},
	lose: {type: String},
	comment : {type: String},
	founder : {type: String },
	captain :{type: String}
});

module.exports = mongoose.model('teams',teamSchema); //database에 있는 users컬렉션과 uSchema와 매칭
