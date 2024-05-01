const inquirer = require(`inquirer`)
const fs = require(`fs`)
const Logo = require(`./lib/Logo`)

inquirer
    .prompt([
        {
            type: `input`,
            message: `Choose your text for the logo(up to 3 characters)?`,
            name: `text`,
        },
        {
            type: `input`,
            message: `What color would you like your text?`,
            name: `textColor`,
        },
        {
            type: `list`,
            message: `Choose your shape`,
            name: `shape`,
            choices: [`circle`, `triangle`, `square`]
        },
    ])
    .then((response) => {
        const generateSVG = new Logo(response.shapeColor, response.textColor, response.shape, response.text)

        fs.writeFile(`../example`, generateSVG, (err) => {
            if (err) {
                console.error(err)
            }else {
                console.log(`Succeccfully generated!`)
            }
        })
    })
    