function person(firstNm, lastNm) {
    this.firstNm = firstNm;
    this.lastNm = lastNm
}
person.prototype.age = 23;
console.log(person.prototype);

let uma = new person("uma","chaitanya");
let jia = new person("jia","swathi");
//instance property takes priority than prototype property
uma.age = 18;
console.log(uma.__proto__);
console.log(uma.age);

person.prototype = { age : 84 }
let yash = new person("yash","goshle");
console.log(yash.age);
console.log(yash.__proto__);
console.log(yash.__proto__.__proto__);
console.log(yash.__proto__.__proto__.__proto__);
