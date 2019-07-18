

function isEven(num)
{
  return num % 2 === 0;
}

function isOdd(num)
{
  return num % 2 === 1;
}

function doubleNum(num)
{
  return (num*2);
}

function sum(a,b)
{
  return a+b;
}

const test ={  
  a :'one',
  b :'two',
  c :'three'};


function myEach(arr, cb)
{
  for (let i = 0; i < arr.length; i++)
  { 
    //Console.log only here to show changes happening to
    //each element of array
    console.log(cb(arr[i]));
  }
}


function myMap(arr, cb)
{
  let newArr = [];

  for (let i = 0; i < arr.length; i++)
  {
    newArr[i] = cb(arr[i]);
  }
  return newArr;
}


function myFilter(arr, cb)
{
  let newArr = [];

  for (let i = 0; i < arr.length; i++)
  {
    if (cb(arr[i]) === true)
    {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}


function mySome(arr, cb)
{
  for (let i = 0; i < arr.length; i++)
  {
    if (cb(arr[i]) == true)
    {
      return true
    }
  }

  return false;
}


function myEvery(arr, cb)
{
  for (let i = 0; i < arr.length; i++)
  {
    if (cb(arr[i]) === false)
    {
      return false
    }
  }

  return true;
}


function myReduce(arr, cb)
{
  let returnValue = 0;

  for (let i = 0; i < arr.length; i++)
  {
    returnValue += cb(arr[i], i);
  }

  return returnValue;
}


function myIncludes(arr,num)
{
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] === num)
    {
      return true;
    }
  }
  return false;
}

function myIndexOf(arr,num)
{
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] === num)
    {
      return i;
    }
  }

  return -1;
}


function myPush(arr,num)
{
  return arr[arr.length] = num;
}


function myLastIndexOf(arr,num)
{
  for (let i = arr.length - 1; i = 0; i--)
  {
    if (num === arr[i])
    {
      return i;
    }
  }
  return -1;
}


function grabKeys(obj)
{
  let keys = [];

  for (let key in obj)
  {
    keys.push(key);
  }

  return keys;
}


function grabValues(obj)
{
  let values = [];

  for (let value in obj)
  {
    values.push(obj[value]);
  }

  return values;
}

// --- TEST CASES ---


// ARRAY BEING USED IN ALL CASES
const arr = [1,2,3,4,5];
console.log("Array Being used in all Functions");
console.log(arr);

// MYEACH
console.log("\nMyEach Function: (doubleNum) ");
myEach(arr,doubleNum);

// MYMAP
console.log("\nmyMap Function: (doubleNum)");
let newArr = myMap(arr,doubleNum);
console.log(newArr);

// MYFILTER
console.log("\nmyFilter Function: (isEven)");
newArr = myFilter(arr,isEven);
console.log(newArr);

console.log("\nmyFilter Function: (isOdd)");
newArr = myFilter(arr,isOdd);
console.log(newArr);

// MYSOME
console.log("\nmySome Function: (isEven)")
console.log(mySome(arr,isEven));

// MYEVERY
console.log("\nmyEvery Function: (isEven)");
console.log(myEvery(arr,isEven));

// MYREDUCE
console.log("\nmyReduce Function: ");
console.log(myReduce(arr,sum));

// MYINCLUDES
console.log("\nmyIncludes Function: (includes(2))");
console.log(myIncludes(arr,2));

// MYINDEXOF
console.log("\nmyIndexOf Function: (indexOf(3))");
console.log(myIndexOf(arr,3));

// MYPUSH
console.log("\nmyPush Function: (push 6)");
myPush(arr,6);
console.log(arr);

// MYLASTINDEXOF
console.log("\nmyLastIndexOf Function: (lastIndexOf 3)");
console.log(myLastIndexOf(arr,3));

// GRABKEYS
console.log("\ngrabKeys Function: ")
console.log(grabKeys(test));

// GRABVALUES
console.log("\ngrabValues Function: ")
console.log(grabValues(test));