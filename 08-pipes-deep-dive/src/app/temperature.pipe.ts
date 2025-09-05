import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true,
})

export class TemperaturePipe implements PipeTransform {
    transform(value: string | number, ...args: any[]) {
        return value + ' - transformed';
    }
}