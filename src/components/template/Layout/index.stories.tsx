import { ComponentMeta, ComponentStory } from '@storybook/react'
import {Layout} from './index'


export default {
  title: 'Templates/Layout',
  argTypes: {
    pageTitle: {
      control: { type: 'string' },
      description: 'ページタイトル',
      table: {
        type: {
          summary: 'ページタイトル'
        },
      },
    },
  },
} as ComponentMeta<typeof Layout>


const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = { 
  pageTitle: 'ダッシュボード',
}