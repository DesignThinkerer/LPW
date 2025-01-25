# Centre IFAPME de Tournai 2024-2025  
**LPW Développeur Web Front-End**  

## Projet : Simulateur de File d’Attente pour un Bureau de Poste  

Créer un simulateur de file d’attente en JavaScript pour un bureau de poste. L’application doit permettre de gérer les clients en attente de différents services (envois, retrait de colis, paiement de factures, etc.).

---

## 1. Fonctionnalités attendues  

L’application doit permettre à l’utilisateur de :  

1. **Ajouter un nouveau client à la file via un formulaire** (nom, service demandé, temps estimé, priorité).  
2. **Servir un client** :  
   - Si un client prioritaire est présent dans la file, il est servi en premier.  
   - Sinon, le premier client de la file est servi.  
3. **Afficher la file d’attente mise à jour** :  
   - Les clients restants, dans l’ordre de priorité ou d’arrivée.  

---

## 2. Contraintes techniques  

L’application doit respecter les contraintes techniques suivantes :  

1. **Utilisation obligatoire d’objets et classes** :  
   - Les clients doivent être créés à partir de la classe `Client`.  
   - La gestion de la file d’attente doit être effectuée via la classe `FilePostale`.  

2. **Gestion de la priorité** :  
   - Les clients prioritaires doivent être servis avant les autres.  

3. **Manipulation dynamique du DOM** :  
   - La file d’attente doit être affichée dynamiquement dans la page.  
   - Les actions doivent mettre à jour l’affichage immédiatement.  

4. **Validation des données** :  
   - Assurez-vous que l’utilisateur remplit les champs requis avant d’ajouter un client.  

---

## 3. Structure de l’application  

### 1. Classe `Client` :  
Chaque client doit être une instance de cette classe, avec les propriétés suivantes :  

- `nom` : Le nom du client.  
- `serviceDemandé` : Le type de service demandé par le client (par exemple, “Envoi de courrier”, “Retrait de colis”, “Paiement de facture”).  
- `prioritaire` : Le client est prioritaire (par exemple, personnes âgées ou handicapées).  

### 2. Classe `FilePostale` :  
Cette classe représente la file d’attente dans le bureau de poste, et elle doit inclure :  

- **Une propriété `clients`** :  
  - Un tableau contenant les clients dans la file d’attente.  

- **Une méthode `ajouterClient(client)`** :  
  - Ajoute un nouveau client à la file.  

- **Une méthode `servirClient()`** :  
  - Retire le premier client (ou le client prioritaire si présent) de la file.  

- **Une méthode `afficherFile()`** :  
  - Retourne une représentation sous forme de tableau ou de liste des clients dans la file, avec leurs informations.  

---

## 4. Interface utilisateur minimale  

L’interface doit contenir au moins :  

1. **Formulaire pour ajouter un client**  
2. **Affichage de la file d’attente**  
3. **Bouton pour servir un client**  
4. **Message d’information** :  
   - Lorsqu’un client est servi, affichez un message indiquant :  
     _Marie Dupont (Service : Retrait de colis) a été servie._  

---

## 5. Bonus  

Améliorations possibles :  

- Ajouter une méthode pour supprimer un client spécifique de la file.  
- Permettre le tri des services selon leur catégorie.  
- Inclure un système de journal pour afficher l’historique des clients servis.  
