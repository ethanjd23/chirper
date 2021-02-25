import React from 'react';
import Chirp from './components/chirp';
import Input from './components/Input'

const App = () => {
    return (
        <>
            <h1 className="jumbotron">Chirper</h1>
            <Input />
            <Chirp />
            <Chirp />
            <Chirp />
        </>
    )
}

export default App;