import React from 'react';
import Header from './Header';

export class Expenses extends React.Component {

    render(){
        return(
            <div>
                <Header/>
                <h2>Expenses</h2> <br/>
                <button className='button-monthly'>MONTHLY</button>
                <button className='button-yearly'>YEARLY</button>
                <label for="month">Choose month:</label>
                <select name="month" id="month">
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                </select>

            
                
            </div>
        );
    };
}