class Modele{
    #nom_produit
    #prix
    constructor(param ,param2){
        this.#nom_produit = param
        this.#prix = param2
    }
    liste_abonne = [] ///<----View
    AjouterAbonn(param)
    {
            this.liste_abonne.push(param)
    }
    SupprimerAbonne(Abonne_chercher){
        this.liste_abonne = this.liste_abonne.filter(filtrage)
        function filtrage(abonne){
            if(Abonne_chercher != abonne ){
                return abonne
            }
        }
    }
    NotifieAbonne(){
        for (let i = 0; i < this.liste_abonne.length; i++) {
            const element = this.liste_abonne[i];
                element.afficher(this.#nom_produit,this.#prix) ///view.afficher()
        }
    }
    SetEtat(param,param1){
        this.#nom_produit = param
        this.#prix = param1
        this.NotifieAbonne()
    }
    getPrix(){
        return this.#prix
    }
    getProduit(){
        return this.#nom_produit
    }
}

export const modele = new Modele("ETAT 0")