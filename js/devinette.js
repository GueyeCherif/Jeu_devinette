/* 
Activité : jeu de devinette
*/
 console.log("Bienvenue dans ce jeu de devinette !");
 // Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
 // Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");
 // TODO : complétez le programme
// initialisation
var choix=-solution;
var tentatives=0;
 var nbre_tentatives=6; //nombre maximum de tentatives
 do {             
            choix = Number(prompt("Entrez un nombre entre 1 et 100:"));
             if (choix<solution)
            {
                alert(choix+" est trop petit.");
            }
            else if (choix>solution)
            {
                alert(choix+" est trop grand.");
            }
             else
            {
              alert("Bravo ! La solution était "+solution+".");
              exit;
            }
        
    tentatives++;
        
    
} while(tentatives<nbre_tentatives &&  choix!=solution);
  
alert("Perdu ... La solution était "+solution+".");
