import * as React from 'react';
import {useCallback} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ApiContext, Todo } from '../../../types/data';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import addTodo from '../../../services/todos/update-todo';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type TodoModalType = {
  open: boolean
  setOpen: (isOpen: boolean) => void
  todo?: Todo
}

export const TodoModal = (props: TodoModalType) => {
  const context: ApiContext = {
    apiRootUrl: 'https://jsonplaceholder.typicode.com/',
  }
  const {open, setOpen, todo} = props
  const handleClose = useCallback(() => {
    setOpen(false)
	}, [])

  const handleUpdate = async () => {
    if (!todo) {
      throw new Error('todo is undefined')
    }
    const ret = await addTodo(context, todo)
    console.log(ret)
    setOpen(false)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={4}>
            <TextField fullWidth id="outlined-basic" label="ユーザーID" variant="outlined" defaultValue={todo?.userId}/>
            <TextField fullWidth id="outlined-basic" label="タスク名" variant="outlined" defaultValue={todo?.title}/>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">進捗</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue={todo?.completed ? "completed" : "not_completed"}
              >
                <FormControlLabel value="completed" control={<Radio />} label="完了" />
                <FormControlLabel value="not_completed" control={<Radio />} label="未完了" />
              </RadioGroup>
            </FormControl>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Stack mt={2} spacing={2} direction="row">
              <Button variant="outlined" onClick={handleClose}>キャンセル</Button>
              <Button variant="contained" onClick={handleUpdate}>更新</Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
