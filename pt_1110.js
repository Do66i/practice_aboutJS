/**
 * 1. Browser에 존재하는 JSON.stringfy 함수를 직접 구현해 봅니다.
 * JSON.stringfy 함수는 input 값을 JSON 형식으로 변환합니다.
 * 단, undefined와 function은 JSON으로 생략되거나 null로 변환됩니다.
 *
 * 2. stringfyJSON은 아래와 같이 작동합니다.
 * - Boolean이 input으로 주어졌을 경우
 * stringifyJSON(true);                // 'true'
 * - String이 input으로 주어졌을 경우
 * stringifyJSON('foo');               // '"foo"'
 * - Array가 input으로 주어졌을 경우
 * stringifyJSON([1, 'false', false]); // '[1,"false",false]'
 * - Object가 input으로 주어졌을 경우
 * stringifyJSON({ x: 5 });            // '{"x":5}'
 * - undefined, function이 주어졌을 경우
 * stringifyJSON(undefined)            // undefined
 * stringifyJSON(function(){})         // undefined
 * stringifyJSON({ x: undefined, y: function(){} })   // '{}'
 *
 * 3. spec/stringifyJSONSpec.js의 stringifiableObjects 배열을 참고해서 테스트에서 어떤 input 값들이
 * 주어지고, 어떻게 stringify해 주어야 할지 생각해 보세요.
 *
 * 4. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될 거예요.
 *  const stringifyJSON = JSON.stringify;
 *
 * 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?:
 */
 function stringifyJSON(obj) {
  if(typeof obj === 'number') {
    return String(obj)
  }
  else if(typeof obj === 'boolean') {
    return String(obj)
  }
  else if(obj === null) {
    return String(obj)
  }
  else if(typeof obj === 'string') {
    return `"${obj}"`
  }

  else if(Array.isArray(obj)) { // obj [ 1, 3, [1, 2]]
    let some = []
    for ( let i = 0; i < obj.length; i++)
      some.push(stringifyJSON(obj[i])) // 
    return '[' + String(some) + ']'
  }

  else if(typeof obj === 'object') {
    let thing = '';
    for (let key in obj) {
      if(obj[key] !== undefined) {
      thing += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ","
      } else {
        return "{}"
    }
  } thing = thing.slice(0, thing.length-1);
  return `{${thing}}`
 }
}


// 다음 코드는 결과 제출을 위한 코드입니다. 신경 쓰지 않아도 좋습니다.
if (typeof window === "undefined") {
  module.exports = stringifyJSON;
}


/////////////////////////////////////////////////////////////////////////

// 여러분들이 tree-UI를 만드셔야 할 메뉴판입니다.
// menu는 수정하지 않고, createTreeView 함수만 수정하세요.

const menu = [
  {
    type: 'group',
    name: '음료',
    children: [
      {
        type: 'group',
        name: '콜드 브루',
        children: [
          { type: 'item', name: '나이트로 콜드 브루' },
          { type: 'item', name: '돌체 콜드 브루' },
          { type: 'item', name: '제주 비자림 콜드 브루' },
          { type: 'item', name: '콜드 브루' },
        ],
      },
      {
        type: 'group',
        name: '프라푸치노',
        children: [
          { type: 'item', name: '애플 쿠키 크림 프라푸치노' },
          { type: 'item', name: '더블 에스프레소 칩 프라푸치노' },
          { type: 'item', name: '모카 프라푸치노' },
          { type: 'item', name: '피스타치오 크림 프라푸치노' },
        ],
      },
      {
        type: 'group',
        name: '블렌디드',
        children: [
          { type: 'item', name: '망고 바나나 블렌디드' },
          { type: 'item', name: '딸기 요거트 블렌디드' },
          { type: 'item', name: '자몽 셔벗 블렌디드' },
          { type: 'item', name: '피치 & 레몬 블렌디드' },
        ],
      },
      {
        type: 'group',
        name: '티',
        children: [
          { type: 'item', name: '라임 패션 티' },
          { type: 'item', name: '민트 블렌드 티' },
          { type: 'item', name: '아이스 유스베리 티' },
          { type: 'item', name: '아이스 캐모마일 블렌드 티' },
        ],
      },
      {
        type: 'group',
        name: '주스',
        children: [
          { type: 'item', name: '한방에 쭉 감당' },
          { type: 'item', name: '파이팅 청귤' },
          { type: 'item', name: '딸기주스' },
          { type: 'item', name: '도와주 흑흑' },
        ],
      },
    ],
  },
  {
    type: 'group',
    name: '음식',
    children: [
      {
        type: 'group',
        name: '빵',
        children: [
          { type: 'item', name: '트러플 미니 스콘' },
          { type: 'item', name: '보늬밤 몽블랑 데니쉬' },
          { type: 'item', name: '고소한 치즈 베이글' },
          { type: 'item', name: '미니 클래식 스콘' },
        ],
      },
      {
        type: 'group',
        name: '케이크',
        children: [
          { type: 'item', name: '밀당 에그 타르트' },
          { type: 'item', name: '마스카포네 티라미수 케이크' },
          { type: 'item', name: '블루베리 쿠키 치즈 케이크' },
          { type: 'item', name: '부드러운 생크림 카스텔라' },
        ],
      },
      {
        type: 'group',
        name: '샌드위치',
        children: [
          { type: 'item', name: '애플 까망베르 샌드위치' },
          { type: 'item', name: '트리플 머쉬룸 치즈 샌드위치' },
          { type: 'item', name: '로스트 치킨 샐러드 밀 박스' },
          { type: 'item', name: 'B.E.L.T 샌드위치' },
        ],
      },
      {
        type: 'group',
        name: '과일',
        children: [
          { type: 'item', name: '하루 한 컵 RED' },
          { type: 'item', name: '한라봉 가득 핸디 젤리' },
        ],
      },
      {
        type: 'group',
        name: '스낵',
        children: [
          { type: 'item', name: '리저브 초콜릿 세트' },
          { type: 'item', name: '로스티드 아몬드 앤 초콜릿' },
          { type: 'item', name: '마카롱' },
          { type: 'item', name: '자일리톨 캔디 크리스탈 민트' },
        ],
      },
      {
        type: 'group',
        name: '아이스크림',
        children: [
          { type: 'item', name: '자바 칩 유기농 바닐라 아이스크림' },
          { type: 'item', name: '넛츠 초콜릿 아포가토' },
          { type: 'item', name: '바닐라 아포가토' },
        ],
      },
    ],
  },
  {
    type: 'group',
    name: '굿즈',
    children: [
      {
        type: 'group',
        name: '머그',
        children: [
          { type: 'item', name: '우리 한글 블랙 머그 473ml' },
          { type: 'item', name: '서울 투어 머그 355ml' },
          { type: 'item', name: '스타벅스 1호점 머그 400ml' },
          { type: 'item', name: '서울 제주 데이머그 세트' },
        ],
      },
      {
        type: 'group',
        name: '텀블러',
        children: [
          { type: 'item', name: 'SS 부산 투어 텀블러 355ml' },
          { type: 'item', name: 'SS 블랙 헤리티지 오드리 텀블러 355ml' },
          { type: 'item', name: 'SS 에치드 실버 텀블러 473ml' },
        ],
      },
      {
        type: 'group',
        name: '악세사리',
        children: [
          { type: 'item', name: '리저브 오렌지 카드 홀더' },
          { type: 'item', name: '스타벅스 1호점 에코백' },
          { type: 'item', name: '스타벅스 1호점 랩탑 파우치' },
        ],
      },
    ],
  },
  {
    type: 'group',
    name: '카드',
    children: [
      { type: 'item', name: '10000원권' },
      { type: 'item', name: '30000원권' },
      { type: 'item', name: '50000원권' },
      { type: 'item', name: '100000원권' },
    ],
  },
];

// TODO: createTreeView 함수를 재귀(자기 자신을 계속 부르게 함)호출하여 테스트케이스를 통과하세요.
// GOAL: 최종 결과가 resut.html와 같은 모습으로 나와야 합니다.

const root = document.getElementById('root');
function createTreeView(menu, currentNode) { //currentNode의 존재의 의미는 ..?
  for (let i = 0; i < menu.length; i++) {
    let li = document.createElement('li')
    if(menu[i].children){
      let input = document.createElement('input')
      input.type = 'checkbox'
      let span = document.createElement('span')
      span.textContent = menu[i].name
      let ul = document.createElement('ul')
      li.append(input)
      li.append(ul)
      li.append(span)
      currentNode.append(li)

      createTreeView(menu[i].children, ul) //menu[i]에 돌다가 children안에 있는 새로운 배열이

    // createTreeView(type.type, currentNode)
    } else {
      li.textContent=menu[i].name
      currentNode.append(li)  
    }
  } 
}

createTreeView(menu, root);
