import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import lottery from './lottery';
import web3 from './web3';

const App = () => {
  const [manager, setManager] = useState('');
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    //const manager = await lottery.methods.manager().call({from: accounts[0]});
    //you do not have to specify the accounts[0], b/c the instance of web3
    //that we are using has default an accounts set up when using with the metamax provider
    //which is the first account when you signed in to metamax.

    async function fetchData() {
      const address = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers.call();
      const balance = await web3.eth.getBalance();
      setManager(address);
      setPlayers(players);
      setBalance(balance);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lottery Contract</h2>
      {manager ? <h2>{manager}</h2> : <h2>None</h2>}
      {players ? players.map((ply) => <h2>{ply}</h2>) : <h2>None</h2>}
      <h4>
        There are currently {players.length} entered competing to win{' '}
        {web3.utils.fromWei(balance, 'ether')} ehter!
      </h4>

      <hr />
      <form>
        <h4>Want to try your luck?</h4>
        <div>
          <label>Amount of ether to enter</label>
          <input
            type="text"
            name="amount"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <button>Enter</button>
      </form>
    </div>
  );
};

export default App;
