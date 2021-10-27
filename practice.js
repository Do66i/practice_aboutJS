let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

let user = {
  name: "John",
  age: 30
};

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user property 전부를 복사해 넣습니다.
for (let key in user) {
  clone[key] = user[key];
}

// clone은 완전히 독립적인 복제본이 됨.
clone.name = "pete"; // clone data 변경

alert( user.name );

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "john"
}, {
  name: "Ann"
});

delete family.father;
delete family.mother.husband;