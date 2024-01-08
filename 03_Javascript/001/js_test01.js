console.log('===========형태의 변수 선언===========')

let bird = {
    name:'노랑이', 
    age:5,
    isCute:true,
    bbibbi: function(){
        return"삐약"
    }
}
console.log(bird.name) 
console.log(bird.age)
console.log(bird.isCute)
console.log(bird.bbibbi()) 
bird.like = 'bug'
bird.age = 5
console.log(bird)

let bear = {
    name: 'cuma',
    isBear: true,
    age: 10,
    sibling:['cucu','mumu']
}
console.log(bear.name) 
console.log(bear['name'])
console.log(bear['age'])
console.log(bear['sibling'][0])

console.log('================================')
console.log('============ Typeof ============')
console.log(typeof 10 + " isn't "+ typeof '' + ' data type.')
let num1 = 10;
let num2 = '';
console.log(Number(num1))
console.log(String(num2))
console.log(typeof Number(num1) +" isn't " + typeof String(num2)+ ' data type.') //number

console.log('================================')
console.log('===========변수 만들기===========')
let mathScore = "75";
let engScore = "88";
mathScore = Number(mathScore);
engScore = Number(engScore);
let avgScore = (mathScore + engScore) / 2;
console.log(avgScore);