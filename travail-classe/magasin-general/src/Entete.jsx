import './Entete.scss';
import PanierSommaire from './PanierSommaire';

function Entete({panier}) {
    // let panier = props.panier
    console.log("Le panier (Entete) : ", panier);
    let tabValPanier = Object.values(panier);
    console.log("Le tableau des valeurs dans le panier : ", tabValPanier);

    // Not REACT way
    // Calcul du nombre d'articles dans le panier avec une boucle for
    // let nbArticles = 0;
    // for (let index = 0; index < tabValPanier.length; index++) {
    //     nbArticles += tabValPanier[index].qte;
        
    // }

    // REACT way
    // Tableau Calcul du nombre d'articles dans le panier avec la méthode reduce() = UNE SEULE EXPRESSION
    /*
    const nbArticles = tabValPanier.reduce((valInitiale, eltSuivant) => valInitiale + eltSuivant.qte, 0);
     */   

    return (
        <header className="Entete">
            <h1>Magasin Général</h1>
            <nav>
                <span>Produits</span>
                <span>À propos</span>
                <span>
                    <PanierSommaire panier={panier}/>
                </span>
            </nav>
        </header>
    )
    
}

export default Entete;