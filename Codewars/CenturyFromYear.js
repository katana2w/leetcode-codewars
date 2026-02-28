function century(year) {
    return year%100 === 0 ? Math.trunc(year/100) : Math.trunc(year/100) + 1;
}

//BEST SOLUTION

const century = year => Math.ceil(year/100)