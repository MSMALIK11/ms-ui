import React from 'react'
import type { Meta, StoryObj } from "@storybook/react";
import Login from './Login';

const meta: Meta<typeof Login> = {
    title: 'component/Login',
    component: Login,
};

export default meta; // Add a semicolon here

type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//     render: () => <Login />,
// }; 
export const Primary: Story = {
    args: { variant: 'primary', children: 'Click Me' },
};
