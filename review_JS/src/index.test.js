import { objToArr, arrToObj, objArrToArrArr } from "./index.js";

const cities = [
  {
    id: 1,
    city: "Biloxi",
    country: "United States",
    address: "Walton"
  },
  {
    id: 2,
    city: "Carmen de Viboral",
    country: "Colombia",
    address: "Drewry"
  },
  {
    id: 3,
    city: "New Mīrpur",
    country: "Pakistan",
    address: "Morningstar"
  },
  {
    id: 4,
    city: "Seropédica",
    country: "Brazil",
    address: "Parkside"
  },
  {
    id: 5,
    city: "Ponjen",
    country: "Indonesia",
    address: "Gina"
  }
];

const arr = [
  [
    ["id", 1],
    ["city", "Biloxi"],
    ["country", "United States"],
    ["address", "Walton"]
  ],
  [
    ["id", 2],
    ["city", "Carmen de Viboral"],
    ["country", "Colombia"],
    ["address", "Drewry"]
  ],
  [
    ["id", 3],
    ["city", "New Mīrpur"],
    ["country", "Pakistan"],
    ["address", "Morningstar"]
  ],
  [
    ["id", 4],
    ["city", "Seropédica"],
    ["country", "Brazil"],
    ["address", "Parkside"]
  ],
  [
    ["id", 5],
    ["city", "Ponjen"],
    ["country", "Indonesia"],
    ["address", "Gina"]
  ]
];

describe("[JS/Node] Review", () => {
  it("objToArr가 객체를 배열로 잘 변경해야 합니다.", () => {
    expect(objToArr(cities[0])).toEqual(arr[0]);
    expect(objToArr(cities[1])).toEqual(arr[1]);
    expect(objToArr(cities[2])).toEqual(arr[2]);
  });

  it("arrToObj가 배열을 객체로 잘 변경해야 합니다.", () => {
    expect(arrToObj(arr[0])).toEqual(cities[0]);
    expect(arrToObj(arr[1])).toEqual(cities[1]);
    expect(arrToObj(arr[2])).toEqual(cities[2]);
  });

  it("objArrToArrArr가 객체 요소를 가진 배열을 배열 요소를 가진 배열로 잘 변경해야 합니다..", () => {
    expect(objArrToArrArr(cities)).toEqual(arr);
  });
});
