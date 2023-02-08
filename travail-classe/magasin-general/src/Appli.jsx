import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import Pied2page from './Pied2page';
import {useState} from 'react';



function Appli() {
  // On utilise le HOOK useState() pour créer un état
  const etatPanier = useState({});
  let panier = etatPanier[0];
  let setPanier = etatPanier[1];
  return (
    <div className="Appli">
        <Entete panier = {panier}/>
        <ListeProduits panier = {panier} setPanier={setPanier} />
        <Pied2page />
    </div>
    
  );
}

export default Appli;
