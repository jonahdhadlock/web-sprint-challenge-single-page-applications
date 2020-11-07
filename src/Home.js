import React from 'react';
import { Route, Switch } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <h1 class="w3-red">Lambda Eatery</h1>
                <h2>Where Pizza Meets Pizzazz!</h2>
                <nav>
                <a href="Home.js">Home</a>
                <a href="Form.js">Form</a>
            </nav>
            <Switch>
            <Route exact path="/"><Form /></Route>
        </Switch>
        </div>
    );
}

export default Home;