import { ComponentStory } from '@storybook/react'
import Typography from '@mui/material/Typography';

export default {
  title: 'Atoms/Text',
  argTypes: {
    variant: {
      options: [
				'body1',
				'body2',
				'button',
				'caption',
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'inherit',
				'overline',
				'subtitle1',
				'subtitle2'
      ],
      control: { type: 'select' },
      defaultValue: 'body1',
      description: 'バリアント',
      table: {
        type: {
          summary: 'body1, body2, button, caption, h1, h2, h3, h4, h5, h6, inherit, overline, subtitle1,subtitle2'
        },
        defaultValue: { summary: 'body1' },
      },
    },
    sx: {
      control: {type: 'object'},
      default: {},
      description: 'その他の設定',
      type: {
        summary: '{"color": "text.primary"}'
      },
    },
		children: {
      control: { type: 'text' },
      description: 'テキスト',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />
export const Default = Template.bind({})
Default.args = { 
  children: 'テストテキスト',
  sx: {color: 'text.primary'}, 
}