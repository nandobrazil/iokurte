import { HttpClient } from '@angular/common/http';
import { Inject, Injector } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import * as _ from 'lodash';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IHttpResult } from '../../interfaces/core/IHttpResult';
import { environment } from 'src/environments/environment';
import { PrepareHttpParams } from '../../utils/query.utils';


export abstract class BaseService<T> {

  urlBase = '';
  http: HttpClient;
  private urlBaseOriginal: string;
  public confirmationSrv: ConfirmationService;
  public messageSrv: MessageService;

  constructor(
    public url: string,
    @Inject(Injector) injector: Injector,
  ) {
    this.urlBase = `${environment.jsonServer}/${this.url}`;
    this.urlBaseOriginal = `${environment.jsonServer}/${this.url}`;
    this.http = injector.get(HttpClient);
    this.confirmationSrv = injector.get(ConfirmationService);
    this.messageSrv = injector.get(MessageService);
  }

  setParamsFromUrl(fields: string[], values: any[]) {
    this.urlBase = this.urlBaseOriginal;
    fields.forEach((f, i) => {
      this.urlBase = this.urlBase.replace(f, values[i]);
    });
  }

  public async GetAll(options?: any): Promise<IHttpResult<T[]>> {
    const result = await lastValueFrom(this.http.get<IHttpResult<T[]>>(`${this.urlBase}`,
      {
        params: PrepareHttpParams(options)
      }
    ));
    if (result && !result.data?.length) {
      result.data = [];
    }
    return result;
  }

  public async GetById(id: number | string): Promise<IHttpResult<T>> {
    return lastValueFrom(this.http.get<IHttpResult<T>>(`${this.urlBase}/${id}`));
  }

  public post(model: T): Promise<IHttpResult<T>> {
    return lastValueFrom(this.http.post<IHttpResult<T>>(this.urlBase, model));
  }

  public put(model: T): Promise<IHttpResult<T>> {
    return lastValueFrom(this.http.put<IHttpResult<T>>(`${this.urlBase}`, model));
  }

  public async delete(model: T, options?: { message?: string, field?: string, useConfirm?: boolean }) {
    const message = _.get(options, 'message');
    const field: string = _.get(options, 'field') as string;
    const useConfirm: boolean = _.get(options, 'useConfirm', true);

    return new Promise(async (resolve, reject) => {
      if (useConfirm) {
        this.confirmationSrv.confirm({
          message: message || `Deseja realmente excluir o(a) ${(model as any)[field ? field : 'name']}?`,
          key: 'deleteConfirm',
          acceptLabel: 'Sim',
          rejectLabel: 'Não',
          accept: async () => {
            try {
              const result = await lastValueFrom(this.http.delete(`${this.urlBase}/${(model as any)['id']}`));
              this.messageSrv.add({ severity: 'success', summary: 'Sucesso', detail: 'Registro excluído com sucesso' });
              resolve((result as any)['success']);
            } catch (error) {
              reject(error);
              console.error(`delete-${this.url}-${(model as any)['id']}-reason:`, error);
            }
          },
          reject: () => {
            resolve(false);
          }
        });
      } else {
        try {
          const result = await lastValueFrom(this.http.delete(`${this.urlBase}/${(model as any)['id']}`));
          this.messageSrv.add({ severity: 'success', summary: 'Sucesso', detail: 'Registro excluído com sucesso' });
          resolve((result as any)['success']);
        } catch (error) {
          reject(error);
          console.error(`delete-${this.url}-${(model as any)['id']}-reason:`, error);
        }
      }
    });
  }

}
