const express = require('express')
const app = express()

const mongoose = require("mongoose");
const config = require('./config/key.js');
const bodyParser = require("body-parser");
const {Model} = require("./models/model.js");


//json -> 요청한 데이터를 해석해 json으로 변환
//app.use : 미들웨어 사용 함수. 
//클라이언트가 데이터를 보내면 중간에서 기능을 처리해 서버로 보냄
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

app.get('/', (req, res) => {
res.send('home')
});

  
app.post('/api/post',(req,res)=>{
    const post = new Model(req.body);

    post.save((err, inputInfo)=>{
        if(err) return res.json({success: false, err});
        return res.status(200).json({
            inputSuccess: true,
        });
    });
});
const port = 5000;
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});


mongoose.set("strictQuery", false);

//srv : 몽고 db 유저 정보로 db와 연결함
mongoose
.connect(config.mongoURI)
    //연결에 성공하면 mongodb connected 출력, 아니면 에러 발생
.then(() => console.log("MongoDB Connected..."))
.catch((err) => console.log(err));