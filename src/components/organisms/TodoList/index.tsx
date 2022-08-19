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


type TodoListProps = {
  todos: Todo[] 
}

export const TodoList = ({todos}: TodoListProps) => {
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
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          全て表示
        </Button>
      </Box>
    </Card>
  )
}
