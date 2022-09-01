function computeDash(num) {
  let arr = [];
  let count = 0;
  while (num > 0) {
    let temp = Math.floor(num % 10);
    arr.push(temp);
    num = Math.floor(num / 10);
  }
  let newArr = [0];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  let res = "";
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 == 0) {
      if (i != 0) {
        if (newArr[i - 1] % 2 == 0) res += "-" + newArr[i];
        else {
          res += newArr[i];
        }
      }
      if (i == 0) {
        res += newArr[i];
      }
    } else if (newArr[i] % 2 != 0) {
      res += "" + newArr[i];
    }
  }
  return res;
}

document.write(computeDash(025468));
