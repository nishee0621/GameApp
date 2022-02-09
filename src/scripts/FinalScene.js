import * as PIXI from "pixi.js";
import { Background } from "./Background";
import { Global } from "./Global";
import { LabelScore } from "./LabelScore";
import { MainScene } from "./MainScene";

export class FinalScene{
    constructor(score){
        this.container = new PIXI.Container();
        this.createBackground();
        this.createPopUp();
        this.createLabelScore(score);
        this.createText();
        this.container.interactive = true;
        this.container.once("pointerdown", () => {
            Global.scene.start(new MainScene());
        })
    }

    createBackground() {
        // create a sprite using a texture and addChild to app.stage
        this.background = new Background();
        this.container.addChild(this.background.container);
    }

    createPopUp(){
        this.popup = new PIXI.Graphics();
        const width = window.innerWidth/2;
        const height = window.innerHeight/2;
        const x = window.innerWidth/4;
        const y = window.innerHeight/4;

        this.popup.beginFill(0x000000, 0.5);
        this.popup.drawRect(x,y,width,height);
        this.container.addChild(this.popup);
    }

    createLabelScore(score){
        const x = 3*window.innerWidth/7;
        const y = window.innerHeight/2 - 200;
        const anchor = 0.5;
        this.view = new LabelScore(x,y,anchor);
        this.container.addChild(this.view.view);
        this.view.render(score);
    }

    createText(){
        const text = new PIXI.Text();
        // text.anchor.set(0.5);
        text.x = 3*window.innerWidth/7;
        text.y = window.innerHeight/2+100;
        text.style = {
            fontFamily : "Verdana",
            fontWeight : "normal",
            fontSize : 34,
            fill : ["#FFFFFF"]
        }
        text.text = "Tap to restart!";
        this.popup.addChild(text);
    }
}