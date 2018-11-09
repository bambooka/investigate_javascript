/* Найдите сумму  всех целых чисел от 1 до n включительно и верните из функции результат. */

function sumOfInteger(n) {
    var x = 0;
    for (var i = 1; i <= n; i++){
        x = x + i;
    }
    return x;
}

/* Даны два целых числа k и n. Верните из функции строку, которая состоит из чисел n, повторяющихся k раз, разделенных пробелом. Известно, что и k и n больше либо равно 1. */

function repeatInteger(a, b) {
    var x = "";
    
    for (var i = 1; i <= b; i++) {
        x = x + " " + a;
    }
    return x;
}

/* Даны числа a и b. Выведите строку с числами от а до b, разделенных пробелами. Известно, что b больше a. */

function orderInteger (c,d) {
    var x = "";
    
    for(var i = c; i <= d; i++){
        x = s + " " + i;
    }
    return x;
}

/* Даны числа a и b. Выведите строку с числами между а и b отсортированными по возрастанию. Неизвестно, какое из чисел больше, но известно, что и a и b больше 0. */

function sortInteger(e,f) {
    var x = "";
    var biger;
    var less;
    if (e > f){
        biger = e;
        less = f;
    } else if (e < f) {
        biger = f;
        less = e;
    } else {
        biger = f;
        less = e;
    }
    
    for(var i = less; i <= biger; i++) {
        x = x + " " + i;
    }
    return x;
}