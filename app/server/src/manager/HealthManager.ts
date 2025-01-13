class HealthManager{
    private health: number;
    constructor(){
        this.health = 100;
    }

    getHealth(){
        return this.health;
    }

    setHealth(health:number){
        this.health = health;
    }
}