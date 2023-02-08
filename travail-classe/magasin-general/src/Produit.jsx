import './Produit.scss'

export default function Produit(props) {
  let panier = props.panier;
  let setPanier = props.setPanier;
  

  function ajouterPanier() {
    // 1er: il faut obtenir une copie conforme du panier (clone)
    // let clonePanier = JSON.parse(JSON.stringify(panier));
    // let clonePanier = {...panier};
    let clonePanier = Object.assign({}, panier);



    // On doit ajouter le produit au panier 
    if (clonePanier[props.pid]) {
      clonePanier[props.pid].qte++;
    }
    else {
      clonePanier[props.pid] = {prix: props.prix, qte : 1};
    }

    // Puis on doit donner à setPanier() la nouvelle valeur du panier
    setPanier(clonePanier);
  }







    return (
        <article className="Produit">
          <img src={'images-produits/' + props.pid + '.webp'} alt={props.nom} />
          <span className='nom'>{props.nom}</span>
          <span className='prix'>{props.prix}</span>
          <button onClick={ajouterPanier}>Ajouter au panier</button>
        </article>
    );
}