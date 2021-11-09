// function Product(productOfName, productOfPrice){
//   this.name = productOfName,
//   this.price = productOfPrice,
//   this.some = function(){
//     price * 0.1
//   }
// }

// var product1 = new Product('옷', 50000)

function Product(상품명, 가격){
  this.name = 상품명;
  this.price = 가격;
  this.부가세 = function(){
    console.log(this.price * 0.1)
  }
}

var product1 = new Product('shirts', 50000);
var product2 = new Product('pants', 60000);

class Counter {
  constructor() {
    this.value = 0; // 생성자 호출을 할 경우, this는 new 키워드로 생성한 Counter의 instance
  }
increase() {
  this.value++
}
decrease() {
  this.value--
}
getValue() {
  return this.value
}
}
let counter1 = new Counter() //생성자 호출
console.log(counter1.increase())
console.log(counter1.getValue())

