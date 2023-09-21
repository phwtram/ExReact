import React from 'react';
import { Players as PlayerList } from '../shared/ListOfPlayers'; 

export default function Players() {
    return (
        <div className='container'>
            {PlayerList.map((player, index) => (
                <div className='column' key={index}>   
                    <div className='card'>
                        <img src={player.img} alt={player.name} /> 
                        <h3>{player.name}</h3>
                        <p className='title'>{player.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            ))}
        </div>
    );
}









// import React, { Component } from 'react';

// export default class Player extends Component {
//     render() {
//         return (
//             <div className='container'>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/cr.jpg' />
//                         <h3>Cristiano Ronaldo</h3>
//                         <p className='title'>Manchester United</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/kante.jpg' />
//                         <h3>Kante</h3>
//                         <p className='title'>Chelsea</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/messi.jpg' />
//                         <h3>Messi</h3>
//                         <p className='title'>PSG</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/neymar.jpg' alt='Neymar' />
//                         <h3>Neymar</h3>
//                         <p className='title'>PSG</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/kane.jpg' alt='Kane' />
//                         <h3>Kane</h3>
//                         <p className='title'>Tottenham</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//                 <div className='column'>
//                     <div className='card'>
//                         <img src='assets/images/haaland.jpg' alt='Haaland' />
//                         <h3>Haaland</h3>
//                         <p className='title'>Manchester City</p>
//                         <p><button>Detail</button></p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }