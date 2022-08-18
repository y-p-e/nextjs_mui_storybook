import type { ApiContext, Todo } from '../../types/data'
import { fetcher } from '../../utils' 

const getAllTodos = async (context: ApiContext): Promise<Todo[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/todos`, {
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getAllTodos
