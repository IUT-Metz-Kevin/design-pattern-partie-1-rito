//Le design pattern Décorateur (Decorator) est le plus adapté à ce scénario. On veut ajouter dynamiquement des options (lait, chantilly, vanille...) à une boisson de base. Chaque option modifie le prix et la description sans toucher à la classe de base Boisson.

// Interface commune pour les boissons et les décorateurs
interface Boisson {
    getDescription(): string;
    getCost(): number;
}

// ☕ Classe de base : Café simple
class Cafe implements Boisson {
    getDescription(): string {
        return "Café";
    }

    getCost(): number {
        return 4.0;
    }
}

// 🏗️ Classe décorateur de base
abstract class BoissonDecorator implements Boisson {
    protected boisson: Boisson;

    constructor(boisson: Boisson) {
        this.boisson = boisson;
    }

    abstract getDescription(): string;
    abstract getCost(): number;
}

// 🎨 Décorateurs concrets (ajoutent des options)
class Lait extends BoissonDecorator {
    getDescription(): string {
        return this.boisson.getDescription() + ", Lait";
    }

    getCost(): number {
        return this.boisson.getCost() + 1.0;
    }
}

class LaitDeCoco extends BoissonDecorator {
    getDescription(): string {
        return this.boisson.getDescription() + ", Lait de coco";
    }

    getCost(): number {
        return this.boisson.getCost() + 2.0;
    }
}

class Chantilly extends BoissonDecorator {
    getDescription(): string {
        return this.boisson.getDescription() + ", Chantilly";
    }

    getCost(): number {
        return this.boisson.getCost() + 1.0;
    }
}

class SaveurVanille extends BoissonDecorator {
    getDescription(): string {
        return this.boisson.getDescription() + ", Saveur Vanille";
    }

    getCost(): number {
        return this.boisson.getCost() + 0.5;
    }
}

class Sucre extends BoissonDecorator {
    getDescription(): string {
        return this.boisson.getDescription() + ", Sucre";
    }

    getCost(): number {
        return this.boisson.getCost() + 0.0; // Gratuit 😃
    }
}

// 🎯 Exemple d'utilisation
const boisson1 = new LaitDeCoco(new Chantilly(new SaveurVanille(new Cafe())));
console.log(`Description: ${boisson1.getDescription()}`);
console.log(`Prix: ${boisson1.getCost()}€`);

const boisson2 = new Lait(new Sucre(new Cafe()));
console.log(`\nDescription: ${boisson2.getDescription()}`);
console.log(`Prix: ${boisson2.getCost()}€`);
