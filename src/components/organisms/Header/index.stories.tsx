import { ComponentMeta, ComponentStory } from '@storybook/react'
import {Header} from './index'

export default {
  title: 'Organisms/Header',
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'ページタイトル',
      table: {
        type: {
          summary: 'ページタイトル'
        },
      },
    },
		selectedProject: {
      control: { type: 'text' },
      description: '選択中のプロジェクト',
      table: {
        type: { summary: '選択中のプロジェクト' },
      },
    },
		onProjectButtonClick: {
      control: { type: 'function' },
      description: '選択中のプロジェクトを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = { 
  title: '開いているページ名',
  selectedProject: '選択中のプロジェクト'
}