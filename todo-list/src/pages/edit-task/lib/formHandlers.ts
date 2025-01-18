import { ChangeEvent } from 'react'

export const createFormHandlers = (setValue: any) => ({
    onNameTaskChange: (evt: ChangeEvent<HTMLInputElement>) =>
        setValue('nameTask', evt.target.value),
    onInfoTaskChange: (evt: ChangeEvent<HTMLInputElement>) =>
        setValue('infoTask', evt.target.value),
    onImportantStatusChange: (evt: ChangeEvent<HTMLInputElement>) =>
        setValue('importantStatus', evt.target.checked),
    onCompletedStatusChange: (evt: ChangeEvent<HTMLInputElement>) =>
        setValue('completedStatus', evt.target.checked),
    onEditStatusChange: (evt: ChangeEvent<HTMLInputElement>) =>
        setValue('editStatus', evt.target.checked),
})
