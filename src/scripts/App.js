// import { Tween } from "@tweenjs/tween.js";
import * as PIXI from "pixi.js";
import TWEEN, { update } from "@tweenjs/tween.js";
import { Loader } from "./Loader";
import { MainScene } from "./MainScene";
import { Global } from "./Global";
import { SceneManager } from "./SceneManager";

export class App {
    run() {

        // initialize the canvas
        this.app = new PIXI.Application({resizeTo: window});
        console.log(this.app);

        document.body.appendChild(this.app.view);
        Global.scene = new SceneManager();
        this.app.stage.addChild(Global.scene.container);
        this.app.ticker.add(dt => Global.scene.update(dt));

        
        // load the sprite
        this.loader = new Loader(this.app.loader);
        this.loader.preload().then(() => Global.scene.start(new MainScene()));



    }

    
}