import React from 'react';
import Cerebral from './Cerebral'
import App from './App'
import Init from './components/Init'

function AppWrapper({width, height}) {
    return (
        <Cerebral>
            <Init/>
            <App/>
        </Cerebral>
    )
}

export default AppWrapper