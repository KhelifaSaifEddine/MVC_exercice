//////dans importation il faut utiliser .js a la fin du chemin////
import {modele} from "./Modele.js"//<----
import {controlleur} from "./Controlleur.js"
import {controlleur_1} from "./Controlleur.js"
import {controlleur_2} from "./Controlleur.js"

class View{
    afficher(Prix_modele,Nom_produit){
      document.getElementById("demo").innerHTML = Prix_modele + Nom_produit 
    }
}
//////Dans importation et exportation il faut toujours mettre 
////// "let" ou bien "var" quand vous declarez les variable////

var view = new View()

modele.AjouterAbonn(view)
const sumbit = document.querySelector(".submit")
sumbit.addEventListener('click',function(){
    const select = document.getElementById("ChoixLivraison")
    const choix = select.options[select.selectedIndex].value
    var prix
    switch (choix) {
        case "ups":
                prix = "35£"    
                controlleur.setStrategy(controlleur_1)
            break;
        case "usps":
            prix = "100£"    
            controlleur.setStrategy(controlleur_2)
        break;
        default:
            break;
    }
    const Nom_produit = document.querySelector(".nom_produit").value
    console.log(Nom_produit + prix)
    controlleur.Changer(modele,Nom_produit,prix) ///
}) 



///modele.SetEtat("Etat 0") ////Changer etat manuelllement//
