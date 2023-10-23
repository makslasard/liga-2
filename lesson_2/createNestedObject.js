// Создание бесконечной вложенности объектов
const createNestedObject = (str, obj) => {
    if (!str) return 'Строка пустая'

    const [key, ...rest] = str.split('.');

    if (!obj.hasOwnProperty(key)) {
        obj[key] = {};
    }

    if (rest.length) {
        createNestedObject(rest.join('.'), obj[key]);
    }

    return obj;
};
console.log(createNestedObject('one.two.three.four.five', {}))

/*
Пограничные случаи:
    1. Строка str пустая

Тест кейсы:
    1. '' - пустая строка - console.log(createNestedObject('', {})) // Строка пустая
    2. 'one' - один объект -
    3. 'sadasda' - console.log(createNestedObject('sadasda', {})) // { sadasda: {} }
    4. Бесконечные вложенные объект console.log(createNestedObject('one.two.three.four.five.one.two.three.four.five', {}))
        Лучше проверять в браузере. У console.log есть ограничение до 3 уровня вложенности
*/

