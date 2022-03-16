import { Repos } from "../../model/Repo";
import { User } from "../../model/User";
import api from "./api/api";

import { CrudService } from "./util/CurdService";





export class GitService extends CrudService<User, string>  {
    
    constructor(){
        super('', '');
    }

    async getRepos(id: string) {
        return await api.get<[]>('/users/'+id+'/repos')
    }
}