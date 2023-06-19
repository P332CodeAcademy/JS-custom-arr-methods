// find
const customFind = (array, callback) => {
    for (const element of array) {
        if (callback(element)) {
            return element;
        }
    }
    return undefined;
};

const numbers = [1, 2, 3, 4, 5];

const foundNumber = customFind(numbers, number => number % 2 === 0);

console.log(foundNumber);

//find end


//filter

const customFilter = (array, callback) => {
    const filteredArray = [];
    for (const element of array) {
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
};

const numbers2 = [1, 2, 3, 4, 5];

const evenNumbers = customFilter(numbers2, number => number % 2 === 0);

console.log(evenNumbers);


//filter end 


//some


const customSome = (array, callback) => {
    for (const element of array) {
        if (callback(element)) {
            return true;
        }
    }
    return false;
};

const numbers4 = [1, 3, 5];

const hasEvenNumber = customSome(numbers4, number => number % 2 === 0);

console.log(hasEvenNumber);


//some end





//every

const customEvery = (array, callback) => {
    for (const element of array) {
        if (!callback(element)) {
            return false;
        }
    }
    return true;
};

const numbers5 = [1, 2, 3, 4, 5];
const allPositive = customEvery(numbers5, number => number > 0);

console.log(allPositive);


//every end



//foreach

function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const numbers6 = [1, 2, 3, 4, 5];

customForEach(numbers6, number => {
    console.log(number);
});

//foreach end



//map
function customMap(array, callback) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(callback(array[i], i, array));
    }
    return mappedArray;
}

const numbers7 = [1, 2, 3, 4, 5];

const doubledNumbers = customMap(numbers7, number => number * 2);

console.log(doubledNumbers);

//mapend

//findindex

function customFindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }

    return undefined;
}

const numbers8 = [3, 4, 5, 16, 25, 29];

const GreaterthanFive = customFindIndex(numbers8, number => number > 5)

console.log(GreaterthanFive);

//findinddex end