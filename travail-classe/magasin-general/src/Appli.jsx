import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import Pied2page from './Pied2page';
import {useState} from 'react';



function Appli() {
  // panier = {
  //   prd0015: {prix: 15.95, qte: 12}
  //   prd0015: {prix: 15.95, qte: 12}
  //   prd0015: {prix: 15.95, qte: 12}
  //   prd0015: {prix: 15.95, qte: 12}
  //   prd0015: {prix: 15.95, qte: 12}
  //   prd0015: {prix: 15.95, qte: 12}
  // }






  // On utilise le HOOK useState() pour créer un état
  // const etatPanier = useState({});
  // let panier = etatPanier[0];
  // let setPanier = etatPanier[1];

  // or 
  // Je veux maintenir le panier dans un objet JS surveillé par REACT
  const [panier, setPanier] = useState({});



  return (
    <div className="Appli">
        <Entete panier = {panier}/>
        <ListeProduits panier = {panier} setPanier={setPanier} />
        <Pied2page />
    </div>
    
  );
}

export default Appli;
