import { LoaderConfig } from "./LoaderConfig";
import { Global } from "./Global";

export class Loader {
    constructor(loader) {
        this.loader = loader;
        this.resources = LoaderConfig;
    }

    preload() {
        return new Promise((resolve, reject) => {
            for(let key in this.resources){
                this.loader.add(key, this.resources[key]);
            }
            this.loader.load((loader,resources) => {
                Global.resources = resources;
                console.log("printing global resources");
                resolve();
                // console.log(Global.resources["bg"]);
            });
            
        });
        
    }
}