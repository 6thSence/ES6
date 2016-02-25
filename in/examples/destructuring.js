var foo = {
    bar: 1,
    baz: 2
};

var { bar, baz } = foo;

/***********************/

var foo = {
    bar: 1,
    baz: 2
};

var { bar } = foo;

/***********************/

var tenses = ['me', 'you', 'he'];
var [firstPerson] = tenses;

console.log(firstPerson);
/***********************/

var tenses = ['me', 'you', 'he'];
var [firstPerson, secondPerson] = tenses;

console.log(`${firstPerson}
${secondPerson}`);
/***********************/
