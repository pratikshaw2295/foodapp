export class Foods{
    // ! symbol use bcoz dont need to create constrator
    id!:number;
    price!:number;
    name!:string;
    favorite!:boolean;
    star:number=0;
    tag?:string[];
    imageUrl!:string;
    cookTime!:string;
    origin!:string[];
}