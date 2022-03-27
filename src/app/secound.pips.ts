import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'secound'
})
export class SecoundPipe implements PipeTransform{

    transform(value: any){
        
        return value.substr(1, value.length);
    }

}