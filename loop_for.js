/* Найдите сумму  всех целых чисел от 1 до n включительно и верните из функции результат. */

function testCycle(n) {
    var x = 0;
    for (var i = 1; i <= n; i++){
        x= x + i;
    }
    return x;
}

