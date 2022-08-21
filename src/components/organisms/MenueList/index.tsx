import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link'

export const MenueList = () => {

  return (
		<>
			<List>
				<ListItem disablePadding>
					<Link href="/" passHref>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="ダッシュボード" />
						</ListItemButton>
					</Link>
				</ListItem>
				<ListItem disablePadding>
					<Link href="/todos/1" passHref>
						<ListItemButton>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText primary="タスク一覧画面" />
						</ListItemButton>
					</Link>
				</ListItem>
			</List>
		</>
  );
}