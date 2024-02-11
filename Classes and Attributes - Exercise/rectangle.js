class Rectangle {
    width;
    height;
    color;
    constructor (width, height, color){
        this.width = width,
        this.height = height,
        this.color = color
    }
    calcArea(width, height){
        return this.width * this.height;
    }
}