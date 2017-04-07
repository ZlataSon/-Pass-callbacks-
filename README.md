# -Pass-callbacks-

Завдання:
Замість рядка "T O D O implement"
написати тіло функції, щоб код виконувався без помилок, і ланцюжок then можна було продовжувати й надалі.
Тільки в одному місці вставляємо код, інше не чіпаємо.

```javascript
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
```

