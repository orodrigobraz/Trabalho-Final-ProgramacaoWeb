<<<<<<<< HEAD:front/src/Components/Header.jsx
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Books } from '../Assets/icon-book.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const {data} = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/conta" aria-label='Books - Home'>
          <Books />
        </Link>
        {data ? (<Link className={styles.login} to="/conta">{data.nome}</Link>) : (<Link className={styles.login} to="/login">Login / Criar</Link>)}
      </nav>
    </header>
  )
}

========
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Books } from '../Assets/icon-book.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const {data} = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label='Books - Home'>
          <Books />
        </Link>
        {data ? (<Link className={styles.login} to="/conta">{data.nome}</Link>) : (<Link className={styles.login} to="/login">Login / Criar</Link>)}
      </nav>
    </header>
  )
}

>>>>>>>> parent of dd5c0a7 (Merge branch 'main' of https://github.com/orodrigobraz/Trabalho-Final-ProgramacaoWeb):src/Components/Header.jsx
export default Header