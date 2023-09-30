import React from 'react';
import App from "./App";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>{/* bcoz we have used routes in app js we have to wrap this in BrowserRouter to enable routing */}
        <App />
    </BrowserRouter>
)
