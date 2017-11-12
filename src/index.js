import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBF0ZO7Ut3T_GqemzqZmbBiGLj5vw9_Lbk';

const App = () => {
    return (
    <div>
    Hi!
    <SearchBar />
    </div>
    );
}



ReactDom.render(<App />,document.querySelector(".container"));