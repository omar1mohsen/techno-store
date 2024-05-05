export interface Product{
    id:number,
    image:string,
    title: string,
    price: number,
    category:string,
    rating: {
        rate: number;
        count: number;
    },
    description:string,
    quantity?: number
}