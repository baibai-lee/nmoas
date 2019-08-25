import React, { useState, useEffect } from 'react';
// import { History } from 'react-router'
import { Link } from 'react-router-dom'

import './index.scss'
interface IProps {
    history: any
}

const Error: React.FC<IProps> = props => {
    const { history } = props
    const [countDown, setCountDown] = useState(3)

    useEffect(() => {
        let timer = setTimeout(() => setCountDown(countDown - 1), 1000);
        if (countDown < 1) {
            history.replace('/')
            return clearTimeout(timer)
        }
    }, [countDown, history])

    return (
        <section className='error'>
            <h1>404 NOT FOUND</h1>
            <div>
                <span>将在{countDown}秒后自动</span>
                <span><Link to='/'>返回首页</Link></span>
            </div>
        </section>
    )
}

export default Error