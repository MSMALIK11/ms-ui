import React from 'react'

type Prop = {
    text: string
}

const Button: React.FC<Prop> = ({ text }) => {
    return (<div>
        <button>Click Me</button>
    </div>
    )
}
export default Button