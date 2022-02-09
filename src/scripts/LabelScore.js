import * as PIXI from "pixi.js";

export class LabelScore {
    constructor(x=10, y=10, anchor=0) {
        this.view = new PIXI.Text();
        this.view.x = x;
        this.view.y = y;
        // this.view.anchor = anchor;
        this.view.style = {
            fontFamily : "Verdana",
            fontWeight : "bold",
            fontSize : 44,
            fill : ["#FF0000"]
        };
        this.render(0);
    }

    render(score) {
        this.view.text = `Score: ${score}`;
        console.log("render function called");
    }
}