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
  const [data, setData] = useState('');

  useEffect(() => {
    //const manager = await lottery.methods.manager().call({from: accounts[0]});
    //you do not have to specify the accounts[0], b/c the instance of web3
    //that we are using has default an accounts set up when using with the metamax provider
    //which is the first account when you signed in to metamax.

    async function fetchData() {
      const address = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);
      setManager(address);
      setPlayers(players);
      setBalance(balance);
    }

    fetchData();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    const account = await web3.eth.getAccounts();

    setData('waiting on transaction success... ');

    await lottery.methods.enter().send({
      from: account[0],
      value: web3.utils.toWei(value, 'ether'),
    });

    setData('you have been entered!');
  };

  const onPick = async () => {
    const accounts = await web3.eth.getAccounts();

    setData('waiting on transaction success... ');

    await lottery.methods.pickWinner().send({ from: accounts[0] });

    setData('a winner has been picked!');
  };

  return (
    <div>
      <h2>Lottery Contract</h2>
      {manager ? <h2>{manager}</h2> : <h2>None</h2>}
      {players && players.map((ply) => <h2>{ply}</h2>)}
      <h4>
        There are currently {players.length} entered competing to win{' '}
        {web3.utils.fromWei(balance, 'ether')} ehter!
      </h4>

      <hr />
      <form onSubmit={onSubmit}>
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
      <hr />

      {data && <h1>{data}</h1>}

      <hr />
      <h4>Ready to pick a winner?</h4>
      <button onClick={onPick}>Pick a winner!</button>
    </div>
  );
};

export default App;
