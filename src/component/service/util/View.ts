import React, { Component } from "react";
import { Base } from "./Base";
import { CrudService } from "./CurdService";
import { IView } from "./IView.interface";



interface Teste {
    progress: boolean
  }
export class View extends Component implements IView  {
    
    constructor(
        protected service: CrudService<Base, string>, 
    ){
        super('');
        this.listAll()
    }

    async listAll() {
      
    }
    add(): Base {
        throw new Error("Method not implemented.");
    }
    onCreate(form: Base): Base {
        throw new Error("Method not implemented.");
    }
    edit(obj: Base): Base {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }

}