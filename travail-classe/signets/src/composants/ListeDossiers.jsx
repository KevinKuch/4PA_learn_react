import './ListeDossiers.scss';
import Dossier from './Dossier';

export default function ListeDossiers({dossiers, setDossiers}) {
  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          // Remarquez l'utilisation du "spread operator" pour "étaler" les 
          // propriétés de l'objet 'dossier' reçu en paramètre de la fonction
          // fléchée dans les props du composant 'Dossier' !!
          // On en parle en classe ;-)
          dossier =>  <li key={dossier.id}>
                        <Dossier {...dossier} />
                      </li>
        )
      }
    </ul>
  );
}