/// <reference path='./index.d.ts'/>
import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
// CONTAINERS
import Root from '@/Root';
// CONFIGS

// ASSETS

// TYPES

ReactDOM.render(<Root />, document.getElementById('root'));

// Polyfill
smoothscroll.polyfill();
