export class Room {
    name: string;
    price: string;
    link: string;
    rating: string;
    description: string;
    
    constructor (name: string, price: string, link: string, rating: string, description: string){
        this.name = name;
        this.price = price;
        this.link = link;
        this.rating = rating;
        this.description = description;
    }
}