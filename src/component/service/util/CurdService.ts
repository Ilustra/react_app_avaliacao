
import { AxiosResponse } from "axios";
import api from "../api/api";
import { ICrud } from "./ICurd";

export abstract class CrudService<T, ID> implements ICrud<T, ID> {

    ///
    BASEAPI = 'https://developer.github.com/v3/'
    //token
    accesKey ='8d84e2f535msh2ecf705eb53119bp1647cbjsnc5a4f9d13869'

    constructor(
      protected _http: any,
      protected _api: string
    ) {  
    
     }
    create(t: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
   async get(id: ID) {
        return await api.get<T>('/users/'+id)
    }
    
    getAll(): void {
        throw new Error("Method not implemented.");
    }
    update(t: ID): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<T> {
        throw new Error("Method not implemented.");
    }

  }