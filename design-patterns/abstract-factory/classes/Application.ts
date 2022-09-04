import { GUIFactory } from "../abstract-factory/gui-factory";
import { Button } from "../interfaces/Button";

class Application {
    private factory: GUIFactory;
    private button: Button;

    constructor(factory: GUIFactory){
        this.factory = factory;
    }

    createUI() {
        this.button = this.factory.createButton();
    }

    paint(){
        this.button.paint();
    }
}