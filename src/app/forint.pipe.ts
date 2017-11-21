import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'forint'
})

export class ForintPipe implements PipeTransform {
  transform(value: string): string {
    let forint = this.formatCurrency(value);
    return forint;
  }


 formatCurrency( data )
  {
        data = String(data).replace(/[\$ ]/g,'');
        var temp = data.split(",");
        if(temp[1] && temp[1].length>2)
        temp[1]=temp[1].substr(0,2);
        
        var output="";
        var re=/(\d{1,3})$/;
        while( temp[0].match( re ) )
        {
        output = " " + RegExp.$1 + output;
        temp[0] = temp[0].replace( re, '' );
        }
        if("undefined" !== typeof(temp[1]) )
        {
        output += "," + String(temp[1]);
        }
        
        return output.substring(1) + " Ft";
  }
} 