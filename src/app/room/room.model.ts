export class Room {
    name: string;
    price: number;
    link: string;
    rating: number;
    description: string;
    
    constructor (name: string, price: number, link: string, rating: number, description: string){
        this.name = name;
        this.price = price;
        this.link = link;
        this.rating = rating;
        this.description = description;
    }
}