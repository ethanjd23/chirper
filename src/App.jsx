import React from 'react';
import Timeline from './components/Timeline'
import Input from './components/Input'

const App = () => {
    return (
        <>
            <h1 className="jumbotron">Chirper</h1>
            <Input />
            <Timeline />
        </>
    )
}

export default App;