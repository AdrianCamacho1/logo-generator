const Svg = require('./lib/Svg');
const { Circle, Square, Triangle } = require('./lib/shapes.js')
const inquirer = require("inquirer")
const {writefile} = require ('fs/promises');

inquirer.prompt([
    {
        type: "list",
        message: "Choose Text Color",
        choices: ["Red", "White", "Black", "Yellow"],
        name: "textColor"
    },
    {
        type: "input",
        message: "Enter logo text",
        name: "logoText"
    },
    {
        type: "list",
        message: "Choose shapeColor",
        choices: ["Red", "White", "Black", "Yellow", "Blue"],
        name: "shapeColor"
    },
    {
        type: "list",
        message: "Choose Shape",
        choices: ["Circle", "Square", "Triangle"],
        name: "Shape"
    },
]).then(response => {
    switch (response.Shape) {
        case "Circle":
            const myShape = new Circle()
            myShape.setShapeColor(response.shapeColor)
            const mySvg = new Svg()
            mySvg.setLogoText(response.textColor, response.logoText)
            mySvg.setLogoShape(myShape)
            console.log(mySvg)
            generateSvg(mySvg);
            break;
        case "Triangle":
            const myShape2 = new Triangle()
            myShape2.setShapeColor(response.shapeColor)
            const mySvg2 = new Svg()
            mySvg2.setLogoText(response.textColor, response.logoText)
            mySvg2.setLogoShape(myShape2)
            generateSvg(mySvg2);
            break;
        case "Square":
            const myShape3 = new Square()
            myShape3.setShapeColor(response.shapeColor)
            const mySvg3 = new Svg()
            mySvg3.setLogoText(response.textColor, response.logoText)
            mySvg3.setLogoShape(myShape3)
            generateSvg(mySvg3);
            break;
    }
})


function generateSvg(mySvg){


    var output = mySvg.render()
    console.log(output)
}
