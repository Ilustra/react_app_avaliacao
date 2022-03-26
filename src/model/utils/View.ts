import { Component } from "react";
import { CrudService } from "./CurdService";
abstract class Base {

}

class Value extends Base {
    list?: any[]
    data: any;
    error?: any;
    statusRequest?: boolean;
}
type MyProps = {};

export class View<T, ID> extends Component<MyProps, Value> {

    constructor(
        public props,
        protected service: CrudService<T, ID>,
    ) {

        super(props);
        this.setState({
            data: [],
            statusRequest: false
        })
        this.listAll()


    }
    getArray = () => {
        const result = JSON.parse(localStorage.getItem('list'));
        return result.lista
    }

    listAll() {
        this.onStatusRequest(true);
        this.service.getAll().then(response => {
            this.setState({
                list: response.data
            })
            localStorage.setItem('list', JSON.stringify({ lista: response.data }));
            this.onStatusRequest(false);

        }).catch(error => {
            this.onStatusRequest(false);
            this.setError(error)
        })
    }
    getbyuser(id: ID) {
        this.onStatusRequest(true);
        this.service.getById(id).then(response => {
            this.setState({
                data: response.data,
            })
            this.onStatusRequest(false);
        }).catch(error => {
            this.setError(error)
            this.onStatusRequest(false);
        })
    }
    setError(error) {
        const { response } = error
        console.log('erros',response)
        this.setState({
            error: response.data

        })
    }
    onStatusRequest = (status) => {
            this.setState({
                statusRequest: status
            })
    }
}

