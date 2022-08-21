import web3 from './web3';

const address = '0x00d86142fB94d3E97D57404a31038711310c4629';

//Attempting to deploy from account 0xbE47bbB9fE0eF594b18e4e8aFaf1e6e1ff805682

// Copy the abi from remix, not from the console.
// THE CONSOLE OUTPUT IS:
// const abi = [
//   { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
//   {
//     inputs: [],
//     name: 'enter',
//     outputs: [],
//     stateMutability: 'payable',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'getPlayers',
//     outputs: [[Object]],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'manager',
//     outputs: [[Object]],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'pickWinner',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [[Object]],
//     name: 'players',
//     outputs: [[Object]],
//     stateMutability: 'view',
//     type: 'function',
//   },
// ];

//Contract deployed to 0x00d86142fB94d3E97D57404a31038711310c4629

// Copy the abi from remix, not from the console.
// THE https://remix.ethereum.org OUTPUT IS:

const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'enter',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPlayers',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'manager',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pickWinner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'players',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export default new web3.eth.Contract(abi, address);
