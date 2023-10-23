const sectionBlock1 = document.querySelector('.section__block--1'),
    sectionBlock2 = document.querySelector('.section__block--2')

// Функция которая создает очереди в определенном порядке
const createQueues = () => {

    // Задача 1

    // Микроказадача - 1.1 : Вывод сообщения в консоль
    const microtaskPromise1 = new Promise(() => {
        setTimeout(() => {
            console.warn('microtaskPromise1 - in setTimeout');
        }, 1000)
    });

    // Макроказадача - 1.2: (Render Task) - изменение стилей у блока
    sectionBlock1.style.backgroundColor = "red";

    // Задача 2

    // Микроказадача - 2.1 : Запрос на сервер
    const microtaskPromise2 = async (url) => {
        try {
            const data = await fetch(url)
                .then(response => response.json())
                .then(json => console.log(json))
        } catch (e) {
            console.log(`Произошла ошибка: ${e}`)
        }
    }
    microtaskPromise2('https://jsonplaceholder.typicode.com/todos/1')

    // Микроказадача - 2.2
    const microtaskPromise3 = new Promise(() => {
        console.log('microtaskPromise3');
    });

    // Задача 3

    // Микроказадача - 3.1
    const microtaskPromise4 = new Promise(() => {
        setTimeout(() => {
            console.log('microtaskPromise4');
        }, 0)
    });

    // Макроказадача (Render Task) - добавление контента
    sectionBlock2.innerHTML = `
            <div class="innerDiv">
                <p>New Content</p>
            </div>  
        `
};

createQueues()