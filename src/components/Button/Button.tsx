import React from 'react'
import { Login as Log } from '../../../dist'
type Prop = {
    text: string
}

const Button: React.FC<Prop> = ({ text }) => {
    return (<div>
        <Log />
        <button>Click Me</button>
    </div>
    )
}
export default Button