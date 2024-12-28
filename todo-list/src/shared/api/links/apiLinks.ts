import { Constants } from '../constants/constant';

export const apiEndpoints = {
  tasks: {
    get: {
      getAll: `${Constants.BASE_URL}`,
      getById: `${Constants.BASE_URL}/{taskId}`,
      getByFilter: `${Constants.BASE_URL}/{taskId}`,
    },
    post: {
      updateById: `${Constants.BASE_URL}/{taskId}`,
      addNewTask: `${Constants.BASE_URL}/{taskId}`,
    },
  },
  users: {
    get: {
      getAll: `${Constants.BASE_URL}/{userId}`,
    },
  },
};
