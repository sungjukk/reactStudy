## Express.js 서버 + 개발서버 사용하기
### 로컬 모듈 설치
* Node.js 프로젝트 생성하기
```
npm init
```
* 의존 모듈 설치하기
```
npm install --save express react react-dom
```
* 개발 의존 모듈 설치하기
```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react react-hot-loader webpack webpack-dev-server
```
* 글로벌 모듈 설치
```
npm install -g babel-cli
```
### 컴파일
* 서버 사이드 코드 컴파일
```
babel server --out-dir build
```
* 서버 열기
```
node build/main.js
```
* 컴파일 간단하게 실행하기
* `package.json` 파일에 스크립트 작성
```
"scripts": {
    "clean": "rm -rf build public/bundle.js",
    "build": "babel server --out-dir build && ./node_modules/.bin/webpack",
    "start": "NODE_ENV=production && node ./build/main.js",
    "development": "NODE_ENV=development && node ./build/main.js"
  },
```
* 스크립트 실행 할 때 npm run <script-name>으로 실행