import React from 'react'
import bg from '../../assets/bg-01.jpeg'
type Prop = {
    text: string
}

const Button: React.FC<Prop> = ({ text }) => {
    return (<div>
        <img src={bg} alt="" />
        <button>Click Me</button>
    </div>
    )
}
export default Button