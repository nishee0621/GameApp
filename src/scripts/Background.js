import * as PIXI from "pixi.js";
import { Global } from "./Global";

export class Background {
    constructor() {
        this.container = new PIXI.Container();
        this.sprites = [];
        this.createSprites();
        this.speed = 3;
    }

    createSprites(){
        for(let i = 0; i< 3; i++){
            this.createSprite(i);
        }
        
    }
    createSprite(i) {
        const sprite = new PIXI.Sprite(Global.resources["bg1"].texture);
        sprite.scale.set(4);
        sprite.x = i*sprite.width;
        sprite.y = 0;
        this.container.addChild(sprite);
        this.sprites.push(sprite);
    }

    move(sprite, offset){
        const leftmostX = 0;
        const rightSpriteX = sprite.x + sprite.width;

        if(rightSpriteX <= leftmostX){
            sprite.x = sprite.x + this.sprites.length*sprite.width;
        }
        sprite.x -= offset;
    }
    update(dt){
        this.sprites.forEach(sprite => {
            const offset = this.speed*dt;
            this.move(sprite, offset);
        });
    }
}