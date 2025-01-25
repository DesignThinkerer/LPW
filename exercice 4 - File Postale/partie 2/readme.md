# Centre IFAPME de Tournai 2024-2025  
## LPW Développeur Web Front-End  
### Projet : Gestionnaire de factures pour un bureau de poste  

**Objectif :**  
Créer un système permettant de gérer les factures des clients d’un bureau de poste. L’application doit permettre de suivre les paiements pour différents types de services proposés, comme les envois de colis, ou encore les factures d’électricité et d’eau.  

---

## 1. Fonctionnalités attendues  

L’application doit permettre à l’utilisateur de :  
1. **Ajouter un client** au bureau de poste en précisant son nom et sa catégorie (Particulier ou Entreprise).  
2. **Ajouter une facture** pour un client existant, en spécifiant :  
   - Le service rendu (e.g., “Envoi de colis”, “Paiement facture EAU”, etc.).  
   - Le montant et la date.  
   - Si la facture a déjà été payée ou non.  
3. **Afficher toutes les factures** dans un tableau, avec des colonnes indiquant :  
   - Le client.  
   - Le type de service.  
   - Le montant.  
   - La date.  
   - L’état (payée ou non).  
4. **Marquer une facture comme payée** via un bouton d’action.  
5. **Afficher des statistiques globales** :  
   - Le total des montants facturés par service (e.g., total des paiements EAU).  
   - Le total des montants payés et impayés pour l’ensemble des clients.  

---

## 2. Contraintes techniques  

L’application doit respecter les contraintes techniques suivantes :  

1. **Utilisation obligatoire d’objets et de classes :**  
   - Les clients doivent être des instances de la classe `Client`.  
   - Les factures doivent être des instances de la classe `Facture`.  
   - La gestion des données doit être centralisée dans la classe `GestionFactures`.  

2. **Manipulation dynamique du DOM :**  
   - Toutes les informations doivent être affichées dynamiquement dans la page.  

3. **Validation des données :**  
   - Assurez-vous que les champs nécessaires sont remplis avant d’ajouter une facture.  
   - Empêchez l’ajout de factures à des clients inexistants.  
   - Le type de service doit être choisi dans une liste prédéfinie.  

---

## 3. Structure de l’application  

### 1. Classe `Client`  
Chaque client est représenté avec les propriétés suivantes :  
- `id` : Identifiant unique du client.  
- `nom` : Nom du client.  
- `email` : Adresse e-mail du client (optionnelle).  
- `typeClient` : Catégorie du client (“Particulier” ou “Entreprise”).  

### 2. Classe `Facture`  
Chaque facture correspond à un service réalisé au bureau de poste :  
- `id` : Identifiant unique de la facture.  
- `client` : Une référence à l’instance de la classe `Client` associée.  
- `service` : Le type de service (e.g., “Envoi de colis”, “Paiement facture EAU”).  
- `montant` : Le montant de la facture.  
- `date` : La date d’émission de la facture.  
- `payée` : Si la facture a été payée ou non.  

### 3. Classe `GestionFactures`  
Cette classe gère toutes les factures et doit inclure :  
- Une propriété `factures` : Un tableau contenant les instances de `Facture`.  
- Une méthode `ajouterFacture(facture)` : Ajoute une nouvelle facture.  
- Une méthode `marquerCommePayee(idFacture)` : Met à jour l’état d’une facture.  
- Une méthode `totalParService(service)` : Retourne le montant total des factures pour un type de service donné.  
- Une méthode `afficherFactures(clientId=null)` : Retourne toutes les factures ou seulement celles d’un client spécifique.  

---

## 4. Interface utilisateur minimale  

L’interface doit contenir au moins :  
1. Un formulaire pour ajouter un client.  
2. Un formulaire pour ajouter une facture.  
3. Un tableau des factures.  
4. Un bouton pour marquer une facture comme payée.  

---

## 5. Bonus : Améliorations possibles  
- Ajouter une fonctionnalité de tri (par montant, date ou état).  
- Permettre une recherche par type de service.