import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    id?: string;
    imagen: string;
    precio: number;
    pedidoId?: string;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;
