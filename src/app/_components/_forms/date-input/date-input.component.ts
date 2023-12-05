import { Component, Input, Self } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'app-date-input',
	standalone: true,
	imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
	templateUrl: './date-input.component.html',
})
export class DateInputComponent {

	@Input() label: string = '';
	@Input() placeholder: string = 'YYYY-MM-DD';
	@Input() requiredMessage: string = '';
	@Input() invalidDateMessage: string = '';

	model: NgbDateStruct | undefined;
}