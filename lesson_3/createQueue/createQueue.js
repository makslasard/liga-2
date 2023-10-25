// Получение элементов
const sectionBlock1 = document.querySelector('.section__block--1'),
    sectionBlock2 = document.querySelector('.section__block--2')

// Функция которая создает очереди в определенном порядке
const createQueues = async () => {
    // Задача 1

    // Микроказадача - 1.1
    const microtaskPromise1 = async () => {
        try {
            console.log('microtaskPromise1')
        } catch (error) {
            console.log(`Произошла ошибка: ${error}`)
        }
    }
    await microtaskPromise1()

    // Макроказадача - 1.2: (Render Task) - изменение стилей у блока
    sectionBlock1.style.backgroundColor = "red";
    console.log(`Смена цвета блока: ${sectionBlock1} - render task`)

    // Задача 2

    // Микроказадача - 2.1
    const microtaskPromise2 = async () => {
        try {
            console.log('microtaskPromise2')
        } catch (error) {
            console.log(`Произошла ошибка: ${error}`)
        }
    }
    await microtaskPromise2()

    // Микроказадача - 2.2
    const microtaskPromise3 = async () => {
        try {
            console.log('microtaskPromise3')
        } catch (error) {
            console.log(`Произошла ошибка: ${error}`)
        }
    }
    await microtaskPromise3()

    // Задача 3

    // Микроказадача - 3.1
    const microtaskPromise4 = async () => {
        try {
            console.log('microtaskPromise4')
        } catch (error) {
            console.log(`Произошла ошибка: ${error}`)
        }
    }
    await microtaskPromise4()

    // Макроказадача (Render Task) - добавление контента
    setTimeout(() => {
        sectionBlock2.innerHTML = `
            <div class="innerDiv">
                <p>New Content</p>
            </div>  
        `
    }, 0)
    console.log(`Добавление контента в блок: ${sectionBlock2} - render task`)
};

await createQueues()

/*
createQueue.js:12 microtaskPromise1
createQueue.js:21 Смена цвета блока: [object HTMLDivElement] - render task
createQueue.js:28 microtaskPromise2
createQueue.js:38 microtaskPromise3
createQueue.js:50 microtaskPromise4
createQueue.js:65 Добавление контента в блок: [object HTMLDivElement] - render task
*/