import { Base } from "./Base";

export interface IView {

  listAll(): void;

  add(): Base ;

  onCreate(form: Base): Base

  edit(obj: Base): Base;
 
  delete(id: number): void;


}