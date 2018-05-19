import React from 'react';
import Cerebral from './Cerebral'
import StageApp from './StageApp'
import Init from './components/Init'

function AppWrapper({width, height}) {
    return (
        <Cerebral>
            <Init/>
            <StageApp/>
        </Cerebral>
    )
}

export default AppWrapper