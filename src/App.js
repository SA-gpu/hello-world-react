import React, { Component } from 'react';
import './App.css';
import MyBanner from './MyBanner';

class App extends Component {

    render() {

        const myAddress = {
            street: 'Somewhere',
            city: 'on',
            state: 'Earth'
        };

        return ( <div>
            <MyBanner
            name = "Hello World!"
            address = { myAddress }
            />
            </div>
        );
    }
}

export default App;