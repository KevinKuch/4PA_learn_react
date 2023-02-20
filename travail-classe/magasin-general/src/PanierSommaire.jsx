import './PanierSommaire.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

export default function PanierSommaire({panier}) {

    return (
        <div className="PanierSommaire">
            <Badge badgeContent={Object.values(panier).reduce((valInitiale, eltSuivant) => valInitiale + eltSuivant.qte, 0)} color="primary">
                <ShoppingCartIcon />
            </Badge>
            <section className="sommaire">
                <h3>Sommaire du pannier</h3>
                <div><span>Articles différents</span><span>5</span></div>
                <div><span>Articles total</span><span>15</span></div>
                <div><span>Sous-Total</span><span>250.95</span></div>
                <div><span>Taxes</span><span>37.50</span></div>
                <div><span>Total</span><span>287.50</span></div>
            </section>
        </div>
    )
}