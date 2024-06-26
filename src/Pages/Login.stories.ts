import React from 'react'
import type { Meta, StoryObj } from "@storybook/react";
import Login from './Login';

const meta: Meta<typeof Login> = {
    title: 'component/Login',
    component: Login,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: { submitText: 'Login Now' },
};
