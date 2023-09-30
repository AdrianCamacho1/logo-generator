class Svg{
    constructor(){
        this.logoText = ""
        this.logoShape = ""
    }
    setLogoText(color, text){
        this.logoText =   `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setLogoShape(shape){
        this.logoShape = shape.render();
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      ${this.logoShape}
      
      ${this.logoText}
      
      </svg>`
    }
}
module.exports = Svg