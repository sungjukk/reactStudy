const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.resolve(__dirname, '../build'))); //이렇게만 해도 작동은 잘되지만 '/' 이 경로 이외에는 해당 라우트를 해준게 없어서 오류가 남

app.get('/*', (req, res, next) => {
    if(req.path.split[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname,'../build/index.html'));
})
// app.get을 해주는 이유
// 새로고침을 하거나 URL로 직접 들어가는 경우 서버 내에서 해당 라우트를 찾는데 
// 그것을 해주기 위해
// 모든 경로로 들어왔을때 리엑트 내의 index.html을 보여줌
// 여기서 주의할 점은 리엑트 빌드 파일이 /static 경로에 위치해 있기 때문에 static 경로는 예외로 처리해줘야함
app.listen(4000, function () {
    console.log('server On 4000');
})