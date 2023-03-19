import reduce from 'lodash/reduce'

const tab = [ 1, 2, 3, 4 ]

const fct = (sum: number, n: number) => sum + n

const res: number = reduce(tab, (sum, n) => {
    return sum + n;
}, 0);

// ou 

const res2: number = reduce(tab, fct, 0);

console.log(res, res2)