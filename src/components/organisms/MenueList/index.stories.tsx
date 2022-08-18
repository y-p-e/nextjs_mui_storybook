import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MenueList } from './index'


export default {
  title: 'Organisms/MenueList',
} as ComponentMeta<typeof MenueList>

const Template: ComponentStory<typeof MenueList> = (args) => <MenueList />

export const Default = Template.bind({})
