import { ComponentMeta, ComponentStory } from '@storybook/react'
import {Header} from './index'

export default {
  title: 'Organisms/Header',
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'オープン',
      table: {
        type: {
          summary: 'オープン'
        },
      },
    },
		handleDrawerOpen: {
      control: { type: 'function' },
      description: 'バーガーメニューを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = { 
  open: false,
}