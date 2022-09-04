import { GUIFactory } from "../abstract-factory/gui-factory";
import { WinButton } from "../classes/win-button";
import { WinCheckbox } from "../classes/win-checkbox";
import { Button } from "../interfaces/Button";
import { Checkbox } from "../interfaces/Checkbox";

export class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton();
    }
    createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}

// Concrete factories produce a family of products that belong
// to a single variant. The factory guarantees that the
// resulting products are compatible. Signatures of the concrete
// factory's methods return an abstract product, while inside
// the method a concrete product is instantiated.