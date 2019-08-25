import React from 'react';

interface IProps{
    children: React.ReactNode
}
const Header: React.FC<IProps> = props => {
    return (
        <div>
            <>{props.children}</>
            Header</div>
    )
}

export default Header