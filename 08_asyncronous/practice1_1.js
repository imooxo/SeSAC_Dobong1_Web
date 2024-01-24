// 실습1 Callback 함수로 이루어진 코드를 Promise, async로 변경하기
// 1.1 then ~ catch로

function call(name) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log(name);
      resolve("call");
    }, 1000);
  });
}

function back() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// call -> back -> hell 순서로 실행
// 1.1
call("jade")
  .then((name) => {
    console.log(name + "반가워");
    return back();
  })
  .then((txt) => {
    console.log(txt + "을 실행했구나");
    return hell();
  })
  .then((message) => {
    console.log("여기는 " + message);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });
