# TP noté sur les designs patterns

- Dans chacun des scénarios, choisissez un design pattern adapté et écrivez le pseudo-code correspondant au scénario.
- Vous pouvez utiliser le langage de votre choix (Python, JavaScript, C#, Java, etc.) pour écrire les exercices.
- Le code n'a pas forcément besoin d'être fonctionnel, le but est d'écrire du pseudo-code représentant un design pattern. Cependant cela est mieux si le langage ne relève pas d'erreur à l'écriture du code dans le cas des langages typés.
- Pour chaque design pattern implémenté, écrivez un exemple d'utilisation.

## Exemple pour un pattern singleton :

**Scénario** :
Dans une application de gestion scolaire, plusieurs composants ont besoin d'accéder à la configuration centrale (chemin des fichiers, paramètres de connexion). Nous devons garantir qu'une seule instance existe et soit accessible partout.

**Pseudo-Code pattern Singleton** :

```php
class Config extends Singleton
{
    private static $instance;
    private $hashmap = [];
    private function __construct() {}

    public static function getInstance(): Config
    {
        if (self::$instance === null) {
            self::$instance = new Config();
        }
        return self::$instance;
    }

    public function getValue(string $key): string
    {
        return $this->hashmap[$key];
    }

    public function setValue(string $key, string $value): void
    {
        $this->hashmap[$key] = $value;
    }
}

/**
 * The client code.
 */
$config1 = Config::getInstance();

$config1->setValue('log_path', 'log.txt');
$config1->setValue('db_connection_user', 'SchoolAdm04786543');
$config1->setValue('db_connection_database', 'SchoolAdm_db_04786543');

// En récupérant l'instance du singleton, nous pouvons accéder aux mêmes données de la même instance de la classe Config
$config2 = Config::getInstance();

print_r($config2->getValue('log_path') === 'log.txt'); // Devrait être à vrai
```

## Scénarios

### Gestionnaire de Paramètres de Jeu

Dans un jeu vidéo, vous avez besoin de gérer les paramètres globaux du jeu de manière unique et centralisée.\
Exemples de paramètres configurables :

- Paramètres du gameplay
  - Difficulté
  - Langue
- Paramètres audio
  - Volume musique
  - Volume effets sonores
- Paramètres graphiques
  - Résolution écran
  - Qualité graphique

### Structure organisationnelle d'entreprise

Dans une grande entreprise, on peut trouver les départements et sous-départements suivants :

- Direction Générale
  - Secrétariat général
  - Département technique
    - IT
    - Web
  - Département commercial
    - Ventes
    - Achats
  - Département financier
    - RH
    - Comptabilité
    - Administration

Chaque département et sous-département peuvent avoir plusieurs employés.

Le programme doit pouvoir transcrire l'organigramme de cette entreprise.

### Interface de contrôle d'un jeu

Un jeu doit pouvoir être contrôlé par plusieurs type de contrôleur : Clavier, Manette Xbox, Manette PS5.

Dans ce jeu nous pouvons faire les actions suivantes :

```ts
interface ControlerActions {
  sauter();
  attaquer();
  interargir();
}
```

Sauf que nos controlleurs ne sont pas pareil d'un controlleur à un autre :

- Clavier nous avons :
  - touche espace
  - clic gauche
  - clic droit
- Manette Xbox :
  - Bouton A
  - Bouton B
  - Bouton X
- Manette PS5 :
  - Bouton X
  - Bouton O
  - Bouton Triangle

Il faudrait que notre programme puisse adapter nos controlleurs pour qu'ils puissent se comporter comme un `ControlerActions`.

### Personnalisation de boissons

Dans un super café gourmant, on peut commander différentes boissons, et demander 0 à plusieurs options pour personnaliser notre boisson.

Chaque boisson à un coût et une description.
Chaque option aura un coût et une description.

Imaginons que nous avons une boisson café à 4€. Nous pourrions la personnaliser avec des options comme :

- Lait (+1€)
- Lait de coco (+2€)
- Chantilly (+1€)
- Saveur Vanille (+0.5€)
- Sucre (+0€)

Les personnalisations sont du coup multiples :

- Café, Lait de coco et Chantilly
- Café, Lait de coco et Saveur Vanille
- Café, Chantilly et Saveur Vanille, Sucre
- Café

Je pourrais donc me commander un café au lait de coco, Chantilly et Saveur Vanille :

- Le coût de la boisson serait de 7.5€
  La description de la boisson serait : `Café, lait de coco, Chantilly, Saveur Vanille`.

Notre programme doit pouvoir donc permettre de composer une boisson avec des options différentes de manière dynamique sans avoir besoin de modifier sa structure de base.

### Création de personnage d'un jeu vidéo

Dans un jeu vidéo de type RPG ou jeu d'aventure, vous avez besoin de créer différents types de personnages :

- Guerrier
- Magicien
- Archer

Ces personnages partagent le même comportement : "Attaquer". Mais ce ne sera pas la même attaque selon que le personnage soit un Guerrier, un Magicien ou un Archer.

On doit pouvoir ajouter d'autres personnages facilement en déléguant la création des personnages à une classe.
