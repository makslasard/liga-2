// Получение всех задач
import axios from 'axios'
import { IEditTask } from '../../edit-task/types/types'
import { allTasksActions } from '../model/allTasksSlice'
import { AppDispatch } from '@/app/store/store'
import { Constants } from '@/shared/api/constants/constant'

export const getAllTasks = () => async (dispatch: AppDispatch) => {
    const url = Constants.BASE_URL

    dispatch(allTasksActions.changeIsLoading({ isLoading: true }))
    try {
        const response = await axios.get<IEditTask[]>(url)
        dispatch(allTasksActions.setTasks({ allTasks: response.data }))
    } catch (e) {
        dispatch(
            allTasksActions.setErrorMessage({ message: `Произошла ошибка! - ${e}` })
        )
    } finally {
        dispatch(allTasksActions.changeIsLoading({ isLoading: false }))
    }
}
