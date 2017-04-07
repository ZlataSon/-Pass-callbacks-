# -Pass-callbacks-

Завдання:
Замість рядка "T O D O implement"
написати тіло функції, щоб код виконувався без помилок, і ланцюжок then можна було продовжувати й надалі.
Тільки в одному місці вставляємо код, інше не чіпаємо.
https://gist.github.com/kikill95/14e5bf101c1b77babc8b..
Старайтесь реалізувати виключно власними силами. Не гугліть, і не шукайте допомоги. Знань у вас більш ніж достатньо для цього :)

function perform() {
    //TODO implement
}

perform(null, function() {
    var param = 1;
    console.log(param);
    return param;
})
    .then(function(param) {
        console.log(++param);
        return param;
    })
    .then(function(param) {
        console.log(++param);
        return param;
    });

