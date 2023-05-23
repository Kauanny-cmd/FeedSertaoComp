import { Post } from './components/Post';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';

import styles from './App.module.css';

import './global.css';

import Jane from './assets/jane.png';
import Devon from './assets/devon.png';
import Bessie from './assets/bessie.png';
import Eu from './assets/eu.png';
import Jenny from './assets/jenny.png';

export function App() {
  var postsUsers = [
    {
      nome: 'Jane Cooper',
      profissao: 'Dev Front-End',
      foto: Jane,
      tempo:'Públicado há 1h',
      texto: 'Fala galeraa 👋 Acabei de realizar o minicurso de React no evento SertaoComp. Vocês gostaram? 🚀',
      chaves: ['#typescript', ' #React', ' #sertaocomp'],
      place: 'Nossa, adorei amigo! Parabéns!'
    },
    {
      nome: 'Devon Lane',
      profissao: 'Dev Front-End',
      foto: Devon,
      tempo:'Públicado há 2h',
      texto: `
      Fala pessoal 👋 Finalmente finalizei minha palestra sobre Clean Architecture. 
      Foi um baita desafio repassar todo meu conhecimento para vocês💪🏻 Deixe seu feedback 👉 devonlane.design
      `,
      chaves: ['#padrões', ' #CleanArchitecture'],
      place: 'Escreva um comentário...'
    },
  ];
  var postsResponses = [
    {
      nome: 'Devon Lane',
      codiNome: '(você)',
      foto:{Eu},
      tempo:'Cerca de 2h',
      texto:'Muito bom Devon, parabéns!! 👏👏',
      aplaudir: '03',
      aplaudirOn: false,
      lixeira: true,
    },
    {
      nome: 'Jenny Wilson',
      codiNome: '',
      foto:{Jenny},
      tempo:'Cerca de 3h',
      texto:'Adorei sua palestra!',
      aplaudir: '33',
      aplaudirOn: true,
      lixeira: false,
    },
    {
      nome: 'Bessie Cooper',
      codiNome: '',
      foto:{Bessie},
      texto:'💜💜',
      aplaudir: '03',
      aplaudirOn: false,
      lixeira: false,
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>
          <Post
            postsUsers={postsUsers}
          />
        </main>
      </div>
    </div>
  )
}
