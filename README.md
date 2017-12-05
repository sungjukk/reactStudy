# reactStudy
## 기본 설정
### 1. Global Package 설치
1. babel : ECMAScript6을 사용할 수 있게 해줌
2. webpack : 모듈 번들러로써 브라우저 위에서 import(require)을 할 수 있게 해주고 자바스크립트 파일을 하나로 합쳐준다.
3. webpack-dev-server : 개발서버로 서버를 구축하지 않고 웹서버를 열 수 있고 hot-loader를 통해 코드가 수정될때마다 자동으로 리로드 되게 할 수 있다.
```
npm install -g babel webpack webpack-dev-server
```
### 2. 프로젝트 생성
```
mkdir react-tutorial && cd react-tutorial
npm init
```
### 3. Dependency 및 plugin 설치
1. react 설치
```
npm install --save react react-dom
```
2. babel에서 사용 될 플러그인 설치
```
npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 webpack webpack-dev-server
```
3. `package.json`에서 설치 내용 확인
```
  "dependencies": {
    "react": "^0.14.7",
    "react-dom": "^0.14.7"
  },
  "devDependencies": {
    "babel-core": "^6.7.0",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "webpack": "^1.12.14",
    "webpack-dev-server": "^1.14.1"
  }
```
### 4. 컴파일러, 서버 및 로더 설정
1. webpack 설정 `webpack.config.js`
```script
module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
};
```
2. `package.json` 설정
```script
 "scripts": {
    "start": "webpack-dev-server --hot --host 0.0.0.0"
  },
```
### 5. html 및 js 수정
1. 이거는 각각 공부하면서 설정 하겠
### 6. webpack-dev-server 구동
```script
npm start
```
