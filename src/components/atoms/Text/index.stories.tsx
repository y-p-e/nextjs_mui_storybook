import { ComponentMeta, ComponentStory } from '@storybook/react'
import {Text} from './index'

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
      description: 'テキストバリアント',
      table: {
        type: {
          summary: 'body1, body2, button, caption, h1, h2, h3, h4, h5, h6, inherit, overline, subtitle1,subtitle2'
        },
        defaultValue: { summary: 'body1' },
      },
    },
    color: {
      options: [
				'primary.main',
				'secondary.main',
				'error.main',
				'warning.main',
				'info.main',
				'success.main',
				'text.primary',
				'text.secondary',
				'text.disabled',
      ],
      control: { type: 'select' },
      defaultValue: 'text.primary',
      description: 'カラー',
      table: {
        type: {
          summary: 'primary.main,	secondary.main,	error.main,	warning.main,	info.main, success.main, text.primary, text.secondary, text.disabled'
        },
        defaultValue: { summary: 'text.primary' },
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
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = { children: 'テストテキスト' }