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
        // const height = window.innerHeight/2;
        const height = width/2;
        const x = window.innerWidth/4;
        const y = window.innerHeight/4;

        this.popup.beginFill(0x000000, 0.5);
        this.popup.drawRect(x,y,width,height);
        this.container.addChild(this.popup);
    }

    createLabelScore(score){
        const x = window.innerWidth/2;
        const y = window.innerWidth < 700 ? window.innerHeight/4 +15 : window.innerHeight/4 + 40 ;
        const anchor = 0.5;
        this.view = new LabelScore(x,y,anchor);
        this.container.addChild(this.view.view);
        this.view.render(score);
    }

    createText(){
        const text = new PIXI.Text();
        text.anchor.set(0.5);
        text.x = window.innerWidth/2;
        text.y = window.innerHeight/4 + window.innerWidth/5;
        text.style = {
            fontFamily : "Verdana",
            fontWeight : "normal",
            fontSize : window.innerWidth < 700 ? 20 : 34,
            fill : ["#FFFFFF"]
        }
        text.text = "Tap to restart!";
        this.popup.addChild(text);
    }
}