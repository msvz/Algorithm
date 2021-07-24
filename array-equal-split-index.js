
const findIndex = (arr) => {
  if (arr.length === 1 || arr.length === 2) {
    console.log(`no index for arr with length ${arr.length}`);
    return;
  }

  const sum = arr.reduce((acc, val) => acc + val, 0);

  let leftSum = 0,
    rightSum = sum - arr[0],
    index = 1,
    missingIndex = 0;

  while (index < arr.length) {

    // console.log(`${index} => ${leftSum}, ${rightSum}`);
    if (leftSum === rightSum) {
      // console.log('found index');
      missingIndex = index - 1;
      break;
    }
    rightSum = rightSum - arr[index];
    leftSum = leftSum + arr[index - 1];
    index = index + 1;
  }


  if (missingIndex === 0) {
    console.log('no such index');
  } else {
    console.log(missingIndex);
  }
};

findIndex([1]);
findIndex([1, 2]);
findIndex([1, 2, 3]); // no index
findIndex([2, 2, 2]); // index at 1
findIndex([1, 2, 3, 4, 10, 9, 5, 5, 4, 6]); // index at 5

