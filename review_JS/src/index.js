export function objToArr(obj) {
  return Object.entries(obj);
}

export function arrToObj(arr) {
  const obj = Object.from.Entries(arr);
  return obj;
}

export function objArrToArrArr(objArr) {
  return objArr.map((el) => Object.entries(el));
}
