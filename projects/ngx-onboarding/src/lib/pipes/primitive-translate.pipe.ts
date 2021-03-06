import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorBaseService } from '../services';

/**
 * Pipe for internal usage to translate the text on the onboarding component like disable, enable
 */
@Pipe({
    name: 'translate',
    pure: true
})
export class PrimitiveTranslatePipe implements PipeTransform {

    constructor(private translateService: TranslatorBaseService) {
    }

    public transform(query: string, ...args: any[]): any {
        return this.translateService.instant(query);
    }
}
