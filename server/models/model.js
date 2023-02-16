const mongoose = require("mongoose");
let timeStamp = require('moment-timezone');
timeStamp.tz.setDefault("Asia/Seoul");

//몽고 db 스키마 만들기
const ModelSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

//스키마를 감싸는 모델 생성
//mongoose.model(모델 이름,스키마)
const Model = mongoose.model("model", ModelSchema);

//모델을 다른 파일에서 쓸 수 있게 export
module.exports = {Model};