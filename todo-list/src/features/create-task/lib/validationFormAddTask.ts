import * as Yup from 'yup'

export const validationFormAddTask = Yup.object().shape({
  nameTask: Yup.string()
    .required('Название задачи обязательное поле')
    .min(6, 'Название задачи должно быть не меньше 6 символов')
    .max(20, 'Название задачи должно быть не более 20 символов'),
  infoTask: Yup.string()
    .required('Описание задачи обязательное поле')
    .min(6, 'Описание задачи должно быть не меньше 6 символов')
    .max(40, 'Описание задачи должно быть не более 40 символов'),
})
