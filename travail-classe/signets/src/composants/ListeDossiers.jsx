import './ListeDossiers.scss';
import Dossier from './Dossier';
import FrmDossier from './FrmDossier';

export default function ListeDossiers({dossiers, setDossiers}) {
  const [frmModifOuvert, setFrmModifOuvert] = useState(false);


  /**
   * Supprime un dossier de la collection
   * 
   * @param string idd: l'identifiant du dossier à supprimer
   * @returns void
   */
  function supprimerDossier(idd) {
    setDossiers(dossiers.filter(dossier => dossier.id !== idd));
  }


  function modifierDossier(id, titre, couverture, couleur, date) {
    setDossiers(dossiers.map(
      dossier => {
        if (dossier.id === idd) {
          return {
            id: idd,
            titre: titre,
            couverture: couverture,
            couleur: couleur,
            dateModif: (new Date()).toJSON()
          }
        } else {
          return dossier;
        }
      }
    ));
  }


  return (
    <>
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          // Remarquez l'utilisation du "spread operator" pour "étaler" les 
          // propriétés de l'objet 'dossier' reçu en paramètre de la fonction
          // fléchée dans les props du composant 'Dossier' !!
          // On en parle en classe ;-)
          dossier =>  <li key={dossier.id}>
                        <Dossier {...dossier} supprimerDossier={supprimerDossier}/>
                      </li>
        )
      }
    </ul>

  <FrmDossier ouvert={frmDossierOuvert} setOuvert={setFrmDossierOuvert} actionDossier={modifierDossier} />
  
  </>
  );
}