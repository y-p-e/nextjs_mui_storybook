import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function SelectProject() {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        {/* 選択中のプロジェクト */}
        <Grid item xs={12}>
            <Title>選択中のプロジェクト</Title>
        </Grid>
        <Grid item xs={10}>
          <Typography component="p" variant="h6">
            テストプロジェクト
          </Typography>
        </Grid>
        <Grid item xs={2} >
          <Box display="flex" justifyContent="right">
            <Button variant="outlined">変更する</Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}