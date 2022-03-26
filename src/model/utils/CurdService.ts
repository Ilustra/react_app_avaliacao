
import { Axios, AxiosResponse } from "axios";
import  {ICrud} from "./ICurd";
import api from "../../api/api";
export abstract class CrudService<T, ID>  implements ICrud<T, ID> {
   

    constructor(
      protected _http: Axios,
      protected _api: string,
      public props
    ){

    }

    create(t: T): Promise<any> {
        return this._http.post<T>(this._api, t)
    }

    getById(id: any): Promise<any> {
        console.log('id: ', id)
        return this._http.get<T>(this._api+'/'+id)
    }    
    getAll(): Promise<any> {
        return this._http.get<T>(this._api)
    }

    update(t: ID): Promise<T> {
        return this._http.put(this._api, t)
    }

    delete(id: number): Promise<T> {
        return this._http.put(this._api +'/'+ id)
    }

  }