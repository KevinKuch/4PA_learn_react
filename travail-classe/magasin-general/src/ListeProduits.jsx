import './ListeProduits.scss';

import Produit from "./Produit";
import produits from './data/produits.json';

export default function ListeProduits(props) {
    console.log("Les produits : ", produits);

    // Pas la 'manière' REACT de faire
    /*
    let composantsProduit = [];
    for(let prd of produits) {
      composantsProduit.push(
        <Produit nom={prd.nom} prix={prd.prix} />
      );
    }
    */

    // produits.map(function(prd) {
    //   return console.log("Produit : ", prd.nom);
      
    // });



    //map, reduce, filter

    // La 'manière' REACT de faire
    return(
        <section className='ListeProduits'>
          <h2>Liste des produits</h2>
            <section className="produits">
              {
                produits.map(function(prd) {
                  return <Produit panier={props.panier} setPanier={props.setPanier} key= {prd.id} nom={prd.nom} prix={prd.prix} pid={prd.id} />
                })
              } 
            </section>
      </section>
    );
}