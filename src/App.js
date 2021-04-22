import React, {useEffect} from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </div>
    )
}

export default App;