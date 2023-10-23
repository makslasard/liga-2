// Реализация функции map
Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i));
    }
    return result;
};

// Пример реализации базового функционала
const array = [1, 2, 3, 4, 5];
const result = array.myMap((item) => console.log(item))

