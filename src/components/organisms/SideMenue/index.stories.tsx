import { ComponentMeta, ComponentStory } from '@storybook/react'
import {SideMenue} from './index'


export default {
  title: 'Organisms/SideMenue',
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
		handleDrawerClose: {
      control: { type: 'function' },
      description: 'バーガーメニューを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof SideMenue>

const Template: ComponentStory<typeof SideMenue> = (args) => <SideMenue {...args} />

export const Default = Template.bind({})
Default.args = { 
  open: true,
}
