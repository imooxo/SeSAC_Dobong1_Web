// 실습1 Callback 함수로 이루어진 코드를 Promise, async로 변경하기
// 1.2 async/await로

function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve("call");
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// call -> back -> hell 순서로 실행
// 1.2
async function execute() {
  const name = await call("jade");
  console.log(name + "반가워");

  const txt = await back();
  console.log(txt + "을 실행했구나");

  const message = await hell();
  console.log("여기는" + message);
}
execute();
