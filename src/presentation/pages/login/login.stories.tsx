import { Story, Meta } from '@storybook/react';

import { Login, LoginProps } from './login';

export default {
  title: 'Pages/Login',
  component: Login,
} as Meta;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
