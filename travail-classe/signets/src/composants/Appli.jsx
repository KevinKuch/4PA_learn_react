import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import FrmDossier from './FrmDossier';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

export default function Appli() {
  const [frmDossierOuvert, setFrmDossierOuvert] = useState(false);


  // État des dossiers de l'utilisateur
  /*
    Structure de la variable dossiers :

    [
      {id: '124135135143124', 
      titre: 'Politique et économie', c
      ouverture: 'https://exemple.com', 
      couleur: '#fff', 
      dateModif: '2023-03-01t12:43:67.234z'},

      {id: '15215523', titre: 'Théâtre', couverture: 'https://exemple.com', couleur: '#0fff', dateModif: '2023-04-01t12:43:67.234z'},
      {id: '', titre: 'Philosophie', couverture: 'https://exemple.com', couleur: '#0f0f', dateModif: '2023-03-01t12:43:67.234z'},
      {id: '', titre: 'Politique et économie', couverture: 'https://exemple.com', couleur: '#fff', dateModif: '2023-03-01t12:43:67.234z'},
      {id: '', titre: 'Politique et économie', couverture: 'https://exemple.com', couleur: '#fff', dateModif: '2023-03-01t12:43:67.234z'},
    ]


   * 
   */
  const [dossiers, setDossiers] = useState(
    () => JSON.parse(localStorage.getItem('4pa-dossiers')) || []
  );

  useEffect(
    () => localStorage.setItem('4pa-dossiers', JSON.stringify(dossiers))
    , [dossiers]
  );

  function ouvrirFrmDossier() {
    setFrmDossierOuvert(true);
  }


  function ajouterDossier(id, titre, couverture, couleur, date) {
    setDossiers([...dossiers, 
      {
        id: id,
        titre: titre,
        couverture: couverture,
        couleur: couleur,
        dateModif: date
      }
    ]);
  }


  return (
    <div className="Appli">
        <Entete />
        <section className="contenu-principal">
          <ListeDossiers dossiers={dossiers} setDossiers={setDossiers}/>
          <FrmDossier ouvert={frmDossierOuvert} setOuvert={setFrmDossierOuvert} actionDossier={ajouterDossier} />
          <Fab onClick={ouvrirFrmDossier} size="large" className="ajoutDossier" color="secondary" aria-label="Ajouter dossier">
            <AddIcon />
          </Fab>
        </section>
    </div>
  );
}
