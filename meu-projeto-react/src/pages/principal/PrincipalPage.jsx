import React from 'react';
import styles from './Principal.module.css';
import bannerHome from '/src/assets/bannerHome.jpg';
import DestinosEmDestaque from '../../components/DestinosEmDestaque/DestinosEmDestaque';


export function Principal() { 
  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <img src={bannerHome} alt="bannerHome" className={styles.bannerHome} />
      </div>
      <h2 className={styles.destinos}>Destinos em Destaque!</h2>
      <DestinosEmDestaque />
    </div>
  );
}


