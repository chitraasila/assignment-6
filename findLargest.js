let num = [3, 45, 6, 7, 23, 5, 7, 8];

function find_largest(index) {
  let i, j;
  let largest = [];
  let max = 0;
  for (i = 0; i < index; i++) {
    max = 0;
    for (j = 0; j < num.length; j++) {
      if (num[j] > max)
        if (!largest.includes(num[j])) {
          max = num[j];
        }
    }
    largest.push(max);
  }
  return largest[index - 1];
}

document.write(find_largest(3));
