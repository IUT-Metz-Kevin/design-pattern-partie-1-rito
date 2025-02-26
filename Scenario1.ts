//  Le design pattern Singleton est le plus adapté à ce scénario. On veut une seule instance qui gère les paramètres globaux.

class GameSettings {
    private static instance: GameSettings;
    private settings: Record<string, any> = {};

    // Constructeur privé pour empêcher l'instanciation directe
    private constructor() {}

    // Méthode pour récupérer l'instance unique
    public static getInstance(): GameSettings {
        if (!GameSettings.instance) {
            GameSettings.instance = new GameSettings();
        }
        return GameSettings.instance;
    }

    // Méthodes pour modifier et récupérer les paramètres
    public setSetting(key: string, value: any): void {
        this.settings[key] = value;
    }

    public getSetting(key: string): any {
        return this.settings[key];
    }
}

// 🎮 Exemple d'utilisation
const settings1 = GameSettings.getInstance();
settings1.setSetting("difficulty", "Hard");
settings1.setSetting("language", "French");
settings1.setSetting("volume_music", 80);
settings1.setSetting("resolution", "1920x1080");

// Vérification que settings2 est bien la même instance
const settings2 = GameSettings.getInstance();
console.log(settings2.getSetting("difficulty"));
console.log(settings2.getSetting("language"));
console.log(settings1 === settings2);
