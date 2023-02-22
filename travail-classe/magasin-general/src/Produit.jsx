import Badge from '@mui/material/Badge';
import './Produit.scss';

export default function Produit({panier, setPanier, nom, prix, pid}) {
    
    function ajouterPanier() {
      // Premièrement il faut obtenir une copie conforme du panier (clone)
      // let clonePanier = JSON.parse(JSON.stringify(panier));
      // let clonePanier = {... panier};
      let clonePanier = Object.assign({}, panier);
      
      // On doit ajouter le produit au panier
      if(clonePanier[pid]) {
        clonePanier[pid].qte++;
      }
      else {
        clonePanier[pid] = {prix: prix, qte: 1};
      }

      // Puis on doit donner à setPanier la nouvelle valeur du panier
      setPanier(clonePanier);

      // Le panier a été modifié DONC on va sauvegarder son dernier état dans localStorage
      // Il faut se rappeler d'effectuer cet "effet secondaire" après chaque 
      // opération de manipulation du panier !!!! 
      // window.localStorage.setItem('panier-ls', JSON.stringify(clonePanier));
    }

    return (
        <article className="Produit">
          <img src={'images-produits/' + pid + '.webp'} alt={nom} />
          <span className='nom'>{nom}</span>
          <span className="prix">{prix}</span>
          <Badge color='success' badgeContent={(panier[pid]) ? panier[pid].qte : 0}>
            <button onClick={ajouterPanier}>Ajouter au panier</button>
          </Badge>
        </article>
    );
}