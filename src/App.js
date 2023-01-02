import React from 'react';
import {Menu} from './Menu';
import {Line} from './Line';
import {Square} from './Square';
import './App.css';
const DEFAULT_BOARD_SIZE = 16;
let currentBoardSize=DEFAULT_BOARD_SIZE;

function App() {

  return (
    <div className="App">
      <header className="App-header" />
      <Menu />
      <div className='App-board'>
          {[...Array(currentBoardSize)].map((elementInArray, index) => (
                  <Line>
                      {[...Array(currentBoardSize)].map((elementInArray, index) => (
                              <Square/>
                          )
                      )}
                  </Line>
              )
          )}

      </div>
    </div>
  );
}

export default App;
