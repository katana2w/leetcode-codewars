/*
* Is it ever possible that (a== 1 && a ==2 && a==3) could evaluate to true in JavaScript?

This is an interview question asked by a major tech company. It happened two weeks back, but I'm still trying to find
* the answer. I know we never write such code in our day-to-day job, but I'm curious.
* */

const a = {
    i: 1,
    toString: function () {
        return a.i++;
    }
}

if(a == 1 && a == 2 && a == 3) {
    console.log('Hello World!');
}
