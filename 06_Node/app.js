const http = require("http");
const fs = require("fs");

const PORT = 8080;
const server = http.createServer(function (request, response) {
  //console.log(request.url)
  const data = fs.readFileSync("./index.html");
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  /* response.writeHead(상태코드, 헤더정보) 
        - text/html : 응답의 콘텐트 형식이 HTML 이라는 의미
        - 인코딩 방식이 utf-8
    */
  //response.write('응답완료!')
  //response.end('<h3>진짜완료!</h3>')
  response.write(data); // const data 보내기
  response.end(); //end는 종료 시키는거 (아무것도 안쓰면 종료됨)
});

/*
  예외처리 try{~} catch(err){}문
  try 스코프 내부 문장에서 오류가 났을 때 catch문으로 err를 보냄
*/
const server2 = http.createServer(function (request, response) {
  const data = fs.readFileSync("./index.html");
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });

  try {
    const data = fs.readFileSync("./index.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.write(data);
    response.end();
  } catch (error) {
    console.log(error);
    const data = fs.readFileSync("./404.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.write(data);
    response.end();
  } finally {
    // finally란? 예외 발생과 상관없이 모두 실행시키고 싶은 경우 작성
    console.log("성공 실패 모두 실행됩니다.");
  }
});

//on = addEvent와 같은 개념
// 1. request 이벤트 : 클라이언트 요청
server.on("request", function () {
  console.log("request 이벤트 실행!");
});

// 2. connection 이벤트 : 클라이언트가 접속했을 때 발생
server.on("connection", (req, res) => {
  console.log("connection 이벤트 발생");
});

server.listen(8080, function () {
  console.log("server is open!");
  console.log(`http://localhost:${PORT}`);
}); // port를 열어줌
