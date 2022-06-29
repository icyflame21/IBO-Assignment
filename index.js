/*
You have been given a list of products which is having property productName, quantity and description.
PROBLEM STATEMENTS:
1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.
Sample Output for the given listOfProducts will be :
{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}
2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.
Sample Output for the given listOfProducts will be :
[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]
*/


const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


const getUniqueProductCount = (listOfProducts) => {
  let productMap = {};
  listOfProducts.forEach(product => {
    if (productMap[product.productName]) {
      productMap[product.productName] += 1;
    } else {
      productMap[product.productName] = 1;
    }
  });
  return productMap;
}

console.log(getUniqueProductCount(listOfProducts));

function getUniquePrducts(listOfProducts){
  let productMap = new Map();
  let productArray = [];
  for(let i=0;i<listOfProducts.length;i++){
    let product = listOfProducts[i];
    if(productMap.has(product.productName)){
      let productObj = productMap.get(product.productName);
      productObj.quantity += product.quantity;
      productMap.set(product.productName,productObj);
    }else{
      productMap.set(product.productName,product);
    }
  }
  for(let [key,value] of productMap.entries()){
    productArray.push(value);
  }
  return productArray;
}

console.log(getUniquePrducts(listOfProducts));
