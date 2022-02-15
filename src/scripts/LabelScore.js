import * as PIXI from "pixi.js";

export class LabelScore {
    constructor(x=10, y=10, anchor=0) {
        this.view = new PIXI.Text();
        this.view.x = x;
        this.view.y = y;
        this.view.anchor.set(anchor);
        this.view.style = {
            fontFamily : "Verdana",
            fontWeight : "bold",
            fontSize : (window.innerWidth < 700) ? 20 : 44,
            fill : ["#FF0000"]
        };
        this.render(0);
    }

    render(score) {
        this.view.text = `Score: ${score}`;
        console.log("render function called");
    }
}