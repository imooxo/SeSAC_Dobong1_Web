const crypto = require("crypto"); // nodejs 내장 모듈, 설치x
/* 
 1. crypto를 이용한 단방향 암호화 구현 - 복호화 불가능
 - createHash(알고리즘)
 - pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// 1-1 ) createHash(알고리즘).update(암호화할 값).digest(인코딩방식)
// 인코딩으로는 base64, hex, ascii, binary 등을 쓸 수 있음

// 비밀번호를 받아서 암호화 시켜주는 함수
const createHashPW = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

console.log("1st hashing", createHashPW("1234"));
console.log("2nd hashing", createHashPW("1234"));
console.log("3rd hashing", createHashPW("1234")); // 전부 다 똑같은 값
console.log("another val", createHashPW("1234.")); // 전부 다 똑같은 값

// 1-2 ) pbkdf2Sync(암호화할값, 솔트, 반복횟수, 키길이, 알고리즘).toString(인코딩방식)
/* 
- 솔트를 이용해서 해싱하는 함수
- salt 생성: crypto.randomBytes(바이트수)
- randomBytes와 pbkdf2Sync 함수는 버퍼 형식의 데이터를 리턴
*/

/* const str = "hello!";
const buffer = Buffer.from(str); //100 001 형태의 버퍼가 16진수로 표현
console.log(buffer); */
// 회원가입 과정
// 새로운 hash와 salt를 만드는 과정, >> db에 hash와 salt를 저장해야함
function saltAndHashPW(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100; // 반복횟수
  const keylen = 64; // 생성할 키의 길이
  const algorithm = "sha512";
  // 1-2 ) pbkdf2Sync(암호화할값, 솔트, 반복횟수, 키길이, 알고리즘).toString(인코딩방식)

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm) //buffer
    .toString("base64"); //buffer to string

  return { hash, salt }; //{hash: hash, salt:salt}
}

console.log("1st hashing", saltAndHashPW("1234"));
console.log("2nd hashing", saltAndHashPW("1234"));
console.log("3rd hashing", saltAndHashPW("1234")); // 다 다른값 출력
// salt 값이 다르기 때문에 모두 다른 값 출력


// 로그인 과정
// DB에 있는 hash와 salt를 이용해서
// input password의 
function checkPW(inputPW, savedSalt, savedHash){
    const iterations = 100; // saltAndPW와 같아야 함
    const keylen = 64; // saltAndPW랑 같아야 함
    const algorithm = "sha512"; // saltAndPW랑 같아야 함

    // inputPW를 해시 시켜주는 작업
    const hash = crypto
    .pbkdf2Sync(inputPW, savedSalt, iterations, keylen, algorithm)
    .toString("base64");
console.log("input hash, >>> ", hash);
    return savedHash === hash;
};

console.log("=======================================================");
const registerPw = "qwer1234";

// 회원가입
// 구조분해 할당
const {salt: registerSalt, hash: registerHash} = saltAndHashPW(registerPw);

console.log("암호화에 쓰인 salt >> ", registerSalt);
console.log("암호화된 hash >>>>> ", registerHash);


// 로그인 >> 비밀번호가 db의 hash 값과 일치하는지 확인
const isMatch = checkPW("qwer1234", registerSalt, registerHash);
const isMatch2 = checkPW("qwer12345", registerSalt, registerHash);
console.log("비밀번호 일치? >> ", isMatch);
console.log("비밀번호 일치? >> ", isMatch2);