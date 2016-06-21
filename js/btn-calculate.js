/*
--| NOM VARIABLE | AFFECTATION | TYPE |
--> firstName --> Récupérer le prénom | Chaîne de caractères |
--> lastName --> Récupérer le nom | Chaîne de caractères |
--> nbrCoffee --> Récupérer le nombre de café bu par jour | Numérique | 
--> nbrDay --> Récupérer le nombre de jour travaillé par semaine 
--> prixCoffee --> Affecter le prix du café | Numérique |

--| NOM VARIABLE | CALCUL | TYPE |
--> resultat --> Multiplier le nombre de café par le nombre de jour et multiplié 
				 ce résultat par le prix du café à l'unité.

--| NOM VARIABLE | CONDITIONS | TYPE |
--> plural --> Conditionner le pluriel pour le mot café | Chaîne de caractères | 
--> plural --> Conditionner le pluriel pour le mot jour | Chaîne de caractères |

--| AFFICHER LES VARIABLES ET LE RÉSULTAT
--| CONCATÉNATION
--> Utilisation d'une méthode pour afficher chaque variable
*/
// Le bouton Calculer
TPF01.attachClick(function () {
	// Déclaration de variable et affectation de valeur
	var firstName = TPF01.getFirstname(), lastName = TPF01.getLastname();
	var nbrCoffee = TPF01.getCofeesPerWeek(), nbrDay = TPF01.getWorkedDays();
	var plural, prixCoffee = 2.5, resultat = (nbrCoffee*nbrDay)*prixCoffee;
	// Condition pour la gestion du pluriel
	if((nbrCoffee == 1) || (nbrDay == 1)){
		plural = " ";
	}
	else{
		plural = "s "
	}
	// Affichage des données après le clique de l'utilisateur
	TPF01.displayResult(
		firstName + " " + lastName + " " + " boit " + nbrCoffee + " café"+ plural + 
		" par jour et travail " + nbrDay + " jour"+ plural +" par semaine. Un café coûte "
		+ prixCoffee +"$, ce qui fait engager une dépense totale de " + resultat + 
		"$ par semaine à "+ firstName + "."
		);
});