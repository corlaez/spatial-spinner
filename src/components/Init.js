import React from 'react'
import { connect } from  '@cerebral/react'
import { signal } from  'cerebral/tags'

class Init extends React.Component {
    componentDidMount(){
        this.props.windowInit()
    }

    render() { return null }
}

const connectObj = { 
    windowInit: signal`app.window.init`,
}

export default connect(connectObj, Init)
