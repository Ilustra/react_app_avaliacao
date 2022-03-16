

export interface  ICrud<T, ID> {


    create(t: T): Promise<T>;

    get(id: ID);

    getAll(): void;

    update(t: ID): Promise<T> ;

    delete(id: number): Promise<T>; 

}