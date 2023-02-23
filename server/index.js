const express = require('express')
const app = express()

const mongoose = require("mongoose");
const config = require('./config/key.js');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const {Model} = require("./models/model.js");
const {auth} = require('./middleware/auth');

mongoose.set("strictQuery", false);
//srv : 몽고 db 유저 정보로 db와 연결함
mongoose
.connect(config.mongoURI)
    //연결에 성공하면 mongodb connected 출력, 아니면 에러 발생
.then(() => console.log("MongoDB Connected..."))
.catch((err) => console.log(err));


//json -> 요청한 데이터를 해석해 json으로 변환
//app.use : 미들웨어 사용 함수. 
//클라이언트가 데이터를 보내면 중간에서 기능을 처리해 서버로 보냄
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('root');
});

app.get('/api/auth', auth, (req, res) => {
    console.log('post save auth in server');
    Model.find(function(err, posts){
                //console.log('read all');
                if(err){
                    console.log(err);
                    return res.send({Auth: false});
                }else{
                    //console.log(posts);
                    return res.status(200).json({
                        postSuccess: true,
                        posts: posts
                    });
                }
            })
});

app.post('/api/post',(req,res)=>{
    const post = new Model(req.body);

    post.save((err, inputInfo)=>{
        if(err) return res.json({success: false, err});
        return res.status(200).json({
            postSuccess: true,
        });
    });
});

app.post('/api/delete', (req, res) => {
    let id = req.body;
    
    Model.findOneAndDelete(id, function (err, docs) {
        if (err){
            console.log('delete');
            return res.json({
                delSuccess: false,
                err
            })
        }
        else{
            return res.status(200).json({
                delSuccess: true
            })
        }
    });
});

app.post('/api/edit', (req, res) => {
    // console.log('edit req');
    // console.log(req.body.params.objectId);
    // console.log(req.body.params);
    // console.log(req.body.params.text);

    Model.findOneAndUpdate(req.body.params.objectId,
        {content: req.body.params.text}
        ,(err,posts) => {
            console.log("edit findoneAndUpdate");
            if(err) {
                return res.json({editSuccess: false, err});
            }
            console.log('edit server');
            return res.status(200).send({
                editSuccess: true,
                message: "Edit 완료"
            });
        });
});


const port = 5000;
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});


