
export interface ICrud<T, ID> {


    create(t: T): Promise<T>;

    getById(id: ID);

    getAll(): Promise<T>;

    update(t: ID): Promise<T> ;

    delete(id: number): Promise<T>; 

}