import { GUIFactory } from "../abstract-factory/gui-factory";
import { MacButton } from "../classes/mac-button";
import { MacCheckbox } from "../classes/mac-checkbox";
import { Button } from "../interfaces/Button";
import { Checkbox } from "../interfaces/Checkbox";

export class MacFactory implements GUIFactory {
    createButton() : Button {
        return new MacButton();
    }
    createCheckbox() : Checkbox {
        return new MacCheckbox();
    }
}