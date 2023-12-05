import { Component, Input, Self } from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";

@Component({
    selector: "app-text-input",
    templateUrl: "./text-input.component.html"
})
export class TextInputComponent implements ControlValueAccessor {
    @Input() label: string | undefined;
    @Input() span: string | undefined;
    @Input() placeholder: string = '';
    @Input() type: string = 'text';
    @Input() requiredMessage: string = '';

    constructor(@Self() public ngControl: NgControl) {
        this.ngControl.valueAccessor = this;
    }
    
    writeValue(obj: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnChange(fn: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnTouched(fn: any): void {
        throw new Error("Method not implemented.");
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }

    get control(): FormControl {
        return this.ngControl.control as FormControl;
    }

}
