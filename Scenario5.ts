//Le design pattern Fabrique (Factory) est le plus adapté à ce scénario. On veut déléguer la création des personnages à une classe dédiée.
// Chaque personnage a un comportement "attaquer", mais il est différent selon le type de personnage.

// Interface commune pour tous les personnages
interface Personnage {
    attaquer(): void;
}

// 🎭 Implémentation des différents types de personnages
class Guerrier implements Personnage {
    attaquer(): void {
        console.log("🗡️ Le Guerrier frappe avec son épée !");
    }
}

class Magicien implements Personnage {
    attaquer(): void {
        console.log("🔮 Le Magicien lance un sort de feu !");
    }
}

class Archer implements Personnage {
    attaquer(): void {
        console.log("🏹 L'Archer tire une flèche !");
    }
}

// 🏗️ Fabrique de personnages
class PersonnageFactory {
    static creerPersonnage(type: string): Personnage {
        switch (type.toLowerCase()) {
            case "guerrier":
                return new Guerrier();
            case "magicien":
                return new Magicien();
            case "archer":
                return new Archer();
            default:
                throw new Error("Type de personnage inconnu !");
        }
    }
}

// 🎯 Exemple d'utilisation
const personnage1 = PersonnageFactory.creerPersonnage("Guerrier");
const personnage2 = PersonnageFactory.creerPersonnage("Magicien");
const personnage3 = PersonnageFactory.creerPersonnage("Archer");

personnage1.attaquer(); // 🗡️ Le Guerrier frappe avec son épée !
personnage2.attaquer(); // 🔮 Le Magicien lance un sort de feu !
personnage3.attaquer(); // 🏹 L'Archer tire une flèche !
