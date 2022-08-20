import * as React from 'react';
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router'

type PaginationProps = {
	pages: number[]
  current_page: number
}

export const Pagination = (props: PaginationProps) => {
	const router = useRouter()
	const {pages, current_page} = props
	const max_page = pages[pages.length - 1]
	const onChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
		router.push(`/todos/${page}`)
	}
  return (
    <Stack spacing={2}>
      <MuiPagination count={max_page} variant="outlined" shape="rounded" onChange={onChangePage}/>
    </Stack>
  );
}
