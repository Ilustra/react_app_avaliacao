import api from "../api/api";
import { User } from "../model/User";
import { CrudService } from "../model/utils/CurdService";




export class GitService extends CrudService<User, string>  {
    
    constructor(public props){
        super(
            api, 
            '/users', 
            props 
        );
    }

    async getRepos(id: string) {
        return await api.get<[]>('/users/'+id+'/repos')
    }
    
}