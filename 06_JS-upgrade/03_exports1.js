/*
    모듈 만들기 (commonJS 방식)
    exports 라는 키워드 사용해서 내보내기
    따로 따로 내보내기
*/

const colors = ['#fff','#ddd','#red'];

const sayHi = () => {
    console.log('hi')
}

function sayName (name) {
    console.log('my name is', name)
    sayHi();
}

module.exports = { // 객체로 내보내짐
    colors,
    sayName
}