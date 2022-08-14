import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItemButton from '@mui/material/ListItemButton';

const products = [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: subHours(Date.now(), 3)
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: subHours(Date.now(), 5)
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: subHours(Date.now(), 9)
  }
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      title="更新されたドキュメント"
    />
    <Divider />
    <List>
      {products.map((product, i) => ( 
        <ListItemButton
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
        </ListItemButton>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        全て表示する
      </Button>
    </Box>
  </Card>
);
