import { Global } from "./Global";
import * as PIXI from "pixi.js";

const LANE_SIZE = 179.25;

export class Hero {
    constructor() {
        this.sprite = new PIXI.Sprite(Global.resources["car"].texture);
        this.sprite.scale.set(0.05);
        this.sprite.x = 100;
        this.dy = 0;
        this.score = 0;
        console.log(this.sprite.width);
        console.log(this.sprite.height);
        this.sprite.y = window.innerHeight - this.sprite.height;
    }

    changeLane(){
        if(this.sprite.y == window.innerHeight - this.sprite.height){
            this.dy = 1;
            this.sprite.y-=LANE_SIZE;
        }
        else if(this.sprite.y == window.innerHeight - this.sprite.height-LANE_SIZE){
            this.dy = 0;
            this.sprite.y+=LANE_SIZE;
        }
    }

    overlap(blocker){
       if(this.dy == 0){
        return this.right > blocker.left + blocker.sprite.width/2 &&
            this.left  < blocker.right && 
            this.top < blocker.bottom;
       }
       else{
           return this.right > blocker.left + blocker.sprite.width/2 &&
                this.left < blocker.right &&
                this.bottom > blocker.top + blocker.sprite.height/2;
       }
    }

    overlap2(blocker){
        let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

        //hit will determine whether there's a collision
        hit = false;
        //Find the center points of each sprite
        this.centerX = this.x + this.width / 2;
        this.centerY = this.y + this.height / 2;
        blocker.centerX = blocker.x + blocker.width / 2;
        blocker.centerY = blocker.y + blocker.height / 2;

        //Find the half-widths and half-heights of each sprite
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;
        blocker.halfWidth = blocker.width / 2;
        blocker.halfHeight = blocker.height / 2;

        vx = this.centerX - blocker.centerX;
        vy = this.centerY - blocker.centerY;

        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = this.halfWidth + blocker.halfWidth;
        combinedHalfHeights = this.halfHeight + blocker.halfHeight;

        if (Math.abs(vx) < combinedHalfWidths) {

            //A collision might be occurring. Check for a collision on the y axis
            if (Math.abs(vy) < combinedHalfHeights) {
        
              //There's definitely a collision happening
              hit = true;
            } else {
        
              //There's no collision on the y axis
              hit = false;
            }
          } else {
        
            //There's no collision on the x axis
            hit = false;
          }
        
          //`hit` will be either `true` or `false`
          return hit;

    }

    get left() {
        return this.sprite.x;
    }

    get right(){
        return this.left + this.sprite.width;
    }

    get top(){
        return this.sprite.y;
    }

    get bottom(){
        return this.top+this.sprite.height;
    }

    update(dt){
        ++this.score;
    }
}