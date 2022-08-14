import {
  Button,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';


export const SelectProject = (props) => (
  <Card {...props}>
    <CardHeader title="選択中のプロジェクト" />
    <Divider />
    <List>
      <ListItem>
        <ListItemText primary="テストプロジェクト"/>
        <Button variant="outlined">変更する</Button>
      </ListItem>
    </List>
  </Card>
);
