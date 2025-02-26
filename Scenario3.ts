//Le design pattern Adaptateur  est le plus adapté à ce scénario.Les contrôleurs ont des entrées différentes (touches différentes).On veut unifier leur utilisation via une interface commune (ControlerActions).

// Interface commune pour tous les contrôleurs
interface ControlerActions {
    sauter(): void;
    attaquer(): void;
    interagir(): void;
}

// 🎮 Classe spécifique pour le clavier
class Clavier {
    appuyerEspace(): void {
        console.log("Clavier : Saut !");
    }

    clicGauche(): void {
        console.log("Clavier : Attaque !");
    }

    clicDroit(): void {
        console.log("Clavier : Interaction !");
    }
}

// 🎮 Classe spécifique pour la manette Xbox
class ManetteXbox {
    boutonA(): void {
        console.log("Manette Xbox : Saut !");
    }

    boutonB(): void {
        console.log("Manette Xbox : Attaque !");
    }

    boutonX(): void {
        console.log("Manette Xbox : Interaction !");
    }
}

// 🎮 Classe spécifique pour la manette PS5
class ManettePS5 {
    boutonX(): void {
        console.log("Manette PS5 : Saut !");
    }

    boutonO(): void {
        console.log("Manette PS5 : Attaque !");
    }

    boutonTriangle(): void {
        console.log("Manette PS5 : Interaction !");
    }
}

// ✨ Adaptateur pour le clavier
class ClavierAdapter implements ControlerActions {
    constructor(private clavier: Clavier) {}

    sauter(): void {
        this.clavier.appuyerEspace();
    }

    attaquer(): void {
        this.clavier.clicGauche();
    }

    interagir(): void {
        this.clavier.clicDroit();
    }
}

// ✨ Adaptateur pour la manette Xbox
class ManetteXboxAdapter implements ControlerActions {
    constructor(private manette: ManetteXbox) {}

    sauter(): void {
        this.manette.boutonA();
    }

    attaquer(): void {
        this.manette.boutonB();
    }

    interagir(): void {
        this.manette.boutonX();
    }
}

// ✨ Adaptateur pour la manette PS5
class ManettePS5Adapter implements ControlerActions {
    constructor(private manette: ManettePS5) {}

    sauter(): void {
        this.manette.boutonX();
    }

    attaquer(): void {
        this.manette.boutonO();
    }

    interagir(): void {
        this.manette.boutonTriangle();
    }
}

// 🎮 Exemple d'utilisation
const clavier = new ClavierAdapter(new Clavier());
const xbox = new ManetteXboxAdapter(new ManetteXbox());
const ps5 = new ManettePS5Adapter(new ManettePS5());

console.log("=== Clavier ===");
clavier.sauter();
clavier.attaquer();
clavier.interagir();

console.log("\n=== Manette Xbox ===");
xbox.sauter();
xbox.attaquer();
xbox.interagir();

console.log("\n=== Manette PS5 ===");
ps5.sauter();
ps5.attaquer();
ps5.interagir();
