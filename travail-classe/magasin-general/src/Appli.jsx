import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import Pied2page from './Pied2page';
import {useEffect, useState} from 'react';

function Appli() {
  // panier = {
  //   prd00015: {prix: 15.95, qte: 12},
  //   prd00204: {prix: 150.50, qte: 2},
  //   prd00001: {prix: 23.65, qte: 3},
  //   prd01258: {prix: 1500.0, qte: 1},
  //   prd00023: {prix: 35.20, qte: 5}
  // }

  // On utilise le HOOK useState()
  // Je veux maintenir le panier dans un objet JS surveillé par React

  // const [panier, setPanier] = useState(function() {
  //   let panierLs = window.localStorage.getItem('panier-ls');
  //   if(panierLs) {
  //     return JSON.parse(panierLs);
  //   }
  //   else {
  //     return {};
  //   }
  // });

  // useState avec une fonction d'initialisation 
  const [panier, setPanier] = useState(
    () => JSON.parse(localStorage.getItem('panier-ls')) || {}
  );

  const [compteur, setCompteur] = useState(0);
  
  useEffect(
    () => {
      localStorage.setItem('panier-ls', JSON.stringify(panier));
      console.log("Le panier d'achats a été sauvegardé dans localStorage !");
    }, [panier]
  );

  return (
    <div className="Appli">
      <Entete panier={panier} />
      <button onClick={() => setCompteur(compteur + 1)}>Compteur de clic ({compteur})</button>
      <ListeProduits panier={panier} setPanier={setPanier} />
      <Pied2page/>
    </div>
  );
}

export default Appli;