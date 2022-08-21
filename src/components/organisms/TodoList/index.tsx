import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { SeverityPill } from '../../atoms/StatusIcon';
import { Todo } from '../../../types/data';
import { Pagination } from '../../organisms/Pagination'
import { TodoModal } from '../../organisms/TodoModal'
import {useState, useCallback} from 'react';

type TodoListProps = {
  todos: Todo[] 
	pages: number[]
  current_page: number
}

export const TodoList = ({todos, pages, current_page}: TodoListProps) => {
  const displayTodos = todos

  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState<Todo>();
  const onClickRow = useCallback((todo: Todo) => {
		setTodo(todo)
		setOpen(true)
	}, [todo])

  return (
    <Card>
      <CardHeader title="タスク一覧画面" />
			<Divider />
			<Box>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>
								ユーザーID
							</TableCell>
							<TableCell>
								タスク名
							</TableCell>
							<TableCell>
								進捗
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{displayTodos.map((todo) => (
							<TableRow
								hover
								key={todo.id}
								onClick={() => onClickRow(todo)}
							>
								<TableCell>
									{todo.userId}
								</TableCell>
								<TableCell>
									{todo.title}
								</TableCell>
								<TableCell>
									<SeverityPill
										color={(todo.completed === true && 'success')
										|| (todo.completed === false && 'error')
                    || 'warning'}
									>
										{(todo.completed === true && '完了')
										|| (todo.completed === false && '未完了')}
									</SeverityPill>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
				<Pagination pages={pages} current_page={current_page}/>
      </Box>
			<TodoModal open={open} setOpen={setOpen} todo={todo}/>
    </Card>
  )
}
