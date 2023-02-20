import './PanierSommaire.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

export default function PanierSommaire({panier}) {
    const infoPanier = calculerSommaire(panier);

    return (
        <div className="PanierSommaire">
            <input type="checkbox" id="cc-panier" />
            <label htmlFor="cc-panier">
            <Badge badgeContent={Object.values(panier).reduce((valInitiale, eltSuivant) => valInitiale + eltSuivant.qte, 0)} color="primary">
                <ShoppingCartIcon />
            </Badge>
            </label>
            <section className="sommaire">
                <h3>Sommaire du pannier</h3>
                <div><span>Articles différents</span><span>{infoPanier.articleDiff}</span></div>
                <div><span>Articles total</span><span>{infoPanier.articleTotal}</span></div>
                <div><span>Sous-Total</span><span>{infoPanier.sousTotal.toFixed(2)}</span></div>
                <div><span>Taxes</span><span>{infoPanier.taxes.toFixed(2)}</span></div>
                <div><span>Total</span><span>{infoPanier.total.toFixed(2)}</span></div>
            </section>
        </div>
    )

    function calculerSommaire(objPanier) {
        let tabPanier = Object.values(objPanier);
        // Définir un objet  qui contiendra l'info sur le panier
        let info = {
            articleDiff: tabPanier.length,
            articleTotal: 0,
            sousTotal: 0, 
            taxes: 0, // sousTotal * 0.15
            total: 0 // taxes + sousTotal
        };
        // Calculer les valeurs
        info.articleTotal = tabPanier.reduce((acc, suiv) => acc + suiv.qte, 0);
                                            // valeur que j'accumule, valeur suivante
        info.sousTotal = tabPanier.reduce((acc, suiv) => acc + suiv.prix * suiv.qte, 0);
        info.taxes = info.sousTotal * 0.15;
        info.total = info.taxes + info.sousTotal;
        
        return info;
    }
}