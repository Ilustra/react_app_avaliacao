import { Component } from "react";
import { CrudService } from "./CurdService";
abstract class Base {

}

class Value extends Base {
    list?: any[]
    data: any;
    error?: any;
}
type MyProps = { };

export class View<T, ID> extends  Component<MyProps, Value> {

    constructor(
        public props,
        protected service: CrudService<T, ID>,
    ){
      
        super(props);
        this.setState({
            data: []
        })
        this.listAll()
        
    }
    listAll(){
        this.service.getAll().then(response=>{
            this.setState({
                data: response.data
              })
        }).catch(error=>{
            console.log(error);
        })
    }
    getbyuser(id: ID){
        this.service.getById(id).then(response=>{
            this.setState({
                data: response.data
              })
           
        }).catch(error=>{
            const {response} = error
            console.log(response)
            this.setState({
                error: response.data
              })
        })
    }
}

