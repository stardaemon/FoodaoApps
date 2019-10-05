class Dish {
    dishName: string
    detail: string
    elements: string
    imageName:string
    videoName?: string
    price: number
    tastes: string[]

    constructor(
        dishName: string, 
        detail: string, 
        elements: string,
        videoName: string,
        imageName:string,
        price: number,
        tatses: string[]) {
        
        this.dishName = dishName
        this.detail = detail
        this.elements = elements
        this.imageName = imageName
        this.videoName = videoName
        this.price = price
        this.tastes = tatses
    }
}

export default Dish