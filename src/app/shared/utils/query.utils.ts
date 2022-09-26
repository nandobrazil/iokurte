import { HttpParams } from '@angular/common/http';

export const PrepareHttpParams = (options?: any) => {
    if (!options) {
        return new HttpParams();
    }
    options = Object.keys(options)
      .reduce((a: any, b)  => {
        if (options[b] !== undefined && options[b] !== null) {
          a[b] = options[b];
        };
        return a;
      }, { });
    const httpParams = new HttpParams({
      fromObject: options
    });
    return httpParams;
};
