class Controlleur{
    #Strategy 
    setStrategy(Strategy){
        this.#Strategy = Strategy
    }
    Changer(objet_modele,nom_produit,prix){
        this.#Strategy.Changer(objet_modele,nom_produit,prix)
    }
}

class Controlleur1{
    Changer(objet_modele,nom_produit,prix){
        objet_modele.SetEtat(nom_produit,prix)
    }
}


class Controlleur2{
    Changer(objet_modele,nom_produit,prix){
        objet_modele.SetEtat(nom_produit,prix) 

    }
}

export const controlleur = new Controlleur()
export const controlleur_1 = new Controlleur1()
export const controlleur_2 = new Controlleur2()