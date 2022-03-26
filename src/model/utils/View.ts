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
  
        this.getArray().then(response=>{
            console.log('local', response[0])
            if(!response.length  )
                this.listAll()
            else
            this.setState({
                list: response
            })
        }).catch(r=>{
            this.listAll()
        })

        
           
        
    }
    getArray = async ()=>{
        const result = JSON.parse(localStorage.getItem('list'));

        return result.lista
    }
    listAll(){
        console.log('listAll')
        this.service.getAll().then(response=>{
            this.setState({
                list: response.data
              })
              localStorage.setItem('list', JSON.stringify({lista: response.data}));


        }).catch(error=>{
            this.setError(error)
        })
    }
    getbyuser(id: ID){
        this.service.getById(id).then(response=>{
            this.setState({
                data: response.data
              })
           
        }).catch(error=>{
            this.setError(error)
         
        })
    }
    setError(error){
        const {response} = error
        this.setState({
            error: response.data
          })
    }
}

