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


type LatestOrdersProps = {
  todos: Todo[] 
}

export const LatestOrders = ({todos}: LatestOrdersProps) => {
  const displayTodos = todos.slice(0, 4)
  console.log(displayTodos)

  const onClickRow = (userId: number) => {console.log(userId)}

  return (
    <Card>
      <CardHeader title="Todoリスト" />
			<Divider />
			<Box>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>
								ユーザーID
							</TableCell>
							<TableCell>
								タイトル
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
