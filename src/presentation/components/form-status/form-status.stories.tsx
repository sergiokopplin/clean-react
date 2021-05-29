import React from 'react';

import { Story, Meta } from '@storybook/react';

import { FormStatus, FormStatusProps } from './form-status';

export default {
  title: 'Components/FormStatus',
  component: FormStatus,
} as Meta;

const Template: Story<FormStatusProps> = (args) => <FormStatus {...args} />;

export const Default = Template.bind({});
Default.args = {};
