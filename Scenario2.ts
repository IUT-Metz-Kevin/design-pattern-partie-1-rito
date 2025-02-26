// Le design pattern Composite est le plus adapté à ce scénario. Car Une entreprise a une hiérarchie avec des départements et des sous-départements.Chaque département peut contenir d'autres départements ou des employés.

// Interface commune pour les départements et les employés
interface OrganizationComponent {
    getName(): string;
    showStructure(indent?: string): void;
}

// Classe représentant un employé (Feuille)
class Employee implements OrganizationComponent {
    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }

    showStructure(indent: string = ""): void {
        console.log(`${indent}- Employé: ${this.name}`);
    }
}

// Classe représentant un département (Composite)
class Department implements OrganizationComponent {
    private components: OrganizationComponent[] = [];

    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }

    addComponent(component: OrganizationComponent): void {
        this.components.push(component);
    }

    showStructure(indent: string = ""): void {
        console.log(`${indent}+ Département: ${this.name}`);
        this.components.forEach((component) =>
            component.showStructure(indent + "  ")
        );
    }
}

// 🎯 Exemple d'utilisation
const directionGenerale = new Department("Direction Générale");

const secreteriatGeneral = new Department("Secrétariat Général");

const departementTechnique = new Department("Département Technique");
const it = new Department("IT");
it.addComponent(new Employee("Alice"));
it.addComponent(new Employee("Bob"));

const web = new Department("Web");
web.addComponent(new Employee("Charlie"));

departementTechnique.addComponent(it);
departementTechnique.addComponent(web);

const departementCommercial = new Department("Département Commercial");
departementCommercial.addComponent(new Department("Ventes"));
departementCommercial.addComponent(new Department("Achats"));

const departementFinancier = new Department("Département Financier");
departementFinancier.addComponent(new Department("RH"));
departementFinancier.addComponent(new Department("Comptabilité"));
departementFinancier.addComponent(new Department("Administration"));

directionGenerale.addComponent(secreteriatGeneral);
directionGenerale.addComponent(departementTechnique);
directionGenerale.addComponent(departementCommercial);
directionGenerale.addComponent(departementFinancier);

// 📌 Affichage de la structure
directionGenerale.showStructure();
