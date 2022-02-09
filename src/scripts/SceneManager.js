import * as PIXI from "pixi.js"
export class SceneManager {
    constructor(){
        this.container = new PIXI.Container();
        this.scene = null;
    }

    start(scene) {
        if(this.scene){
            this.scene.container.destroy();
        }
        this.scene = scene;
        this.container.addChild(scene.container);
    }

    update(dt){
        if(this.scene && this.scene.update){
            console.log("in update function");
            this.scene.update(dt);
        }
    }
}