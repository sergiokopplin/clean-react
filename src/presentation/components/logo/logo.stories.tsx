import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Logo, LogoProps } from './logo';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => (
  <div style={{ background: '#ccc' }}>
    <Logo {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
