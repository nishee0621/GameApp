// Main scene containing background added here
import * as PIXI from "pixi.js";
import { Hero } from "./Hero";
import { Blockers } from "./Blockers";
import { FinalScene } from "./FinalScene";
import { Background } from "./Background";
// import { LabelScore } from "./LabelScore";
import { LabelScore } from "./LabelScore";
import { Global } from "./Global";

export class MainScene {
    constructor(){
        this.container = new PIXI.Container();
        this.createBackground();
        this.createHero();
        this.createBlockers();
        this.createScoreView();
    }

    createBackground() {
        // create a sprite using a texture and addChild to app.stage
        this.background = new Background();
        this.container.addChild(this.background.container);
        
    }

    createBlockers(){
        this.blockers = new Blockers();
        this.container.addChild(this.blockers.container);
    }

    createHero(){
        this.hero = new Hero();
        this.container.addChild(this.hero.sprite);
        this.container.interactive = true;
        this.container.on("pointerdown", () => {
            console.log("event triggered");
            this.hero.changeLane();
        });
        this.hero.sprite.once("die", () => {
            Global.scene.start(new FinalScene(this.hero.score));
        });
    }

    update(dt){
        this.background.update(dt);
        this.blockers.update(dt);
        this.hero.update(dt);
        this.blockers.checkCollision(this.hero);
        // this.hero.update();
    }

    createScoreView(){
        this.view = new LabelScore();
        this.container.addChild(this.view.view);
        this.hero.sprite.on("score", () => {
            console.log("In the score event!");
            this.view.render(this.hero.score);
        });
    }
}

// what I have to do -> ek container chahiye hai jisme saari puzzle piece 
// aa sake. 