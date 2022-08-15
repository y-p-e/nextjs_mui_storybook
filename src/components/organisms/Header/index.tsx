import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
	title: string
  selectedProject: string
  onProjectButtonClick?: () => void
}

export const Header: React.FC<Props> = props => {
  const { title, selectedProject, onProjectButtonClick } = props
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button 
          color="inherit"
          onClick={() => onProjectButtonClick && onProjectButtonClick()}
        >
          {selectedProject}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
