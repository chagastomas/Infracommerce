import React from 'react';
import ReactDom from 'react-dom';
import Home from './Home';
import "./styles/style";

let root = document.createElement("div");
document.body.appendChild(root);

ReactDom.render(
    <Home />,
    root
);
