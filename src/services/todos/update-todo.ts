import type { ApiContext, Todo } from '../../types/data'
import { fetcher } from '../../utils' 

const addTodo = async (
  context: ApiContext,
  todo: Todo,
): Promise<Todo> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/todos/${todo.id}`, {
    method: 'PATCH',
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(todo),
  })
}

export default addTodo
