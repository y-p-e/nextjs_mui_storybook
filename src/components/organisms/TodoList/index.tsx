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
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../../atoms/StatusIcon';
import { Todo } from '../../../types/data';
import { Pagination } from '../../organisms/Pagination'

type TodoListProps = {
  todos: Todo[] 
	pages: number[]
  current_page: number
}

export const TodoList = ({todos, pages, current_page}: TodoListProps) => {
  const displayTodos = todos

  const onClickRow = (userId: number) => {console.log(userId)}

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
								onClick={() => onClickRow(todo.id)}
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
    </Card>
  )
}
