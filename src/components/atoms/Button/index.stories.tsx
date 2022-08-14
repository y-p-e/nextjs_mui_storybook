import { ComponentMeta, ComponentStory } from '@storybook/react'
import BasicButtons from './index'

export default {
  title: 'Atoms/Button',
  argTypes: {
    variant: {
      description: 'MUIボタンテスト',
    },
  },
} as ComponentMeta<typeof BasicButtons>

const Template: ComponentStory<typeof BasicButtons> = (args) => <BasicButtons />

// Primaryボタン
export const Primary = Template.bind({})
