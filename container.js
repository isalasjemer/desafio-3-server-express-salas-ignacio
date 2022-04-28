const fs = require('fs');

class Container {
    constructor(file) {
        this.file = file
    }

    async getAll() {
        try {
            const data = await fs.promises.readFile(this.file, 'utf-8')
            const result = JSON.parse(data)
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async getRandom() {
        try {
            const data = await fs.promises.readFile(this.file, 'utf-8')
            const result = JSON.parse(data)
            return result[Math.floor(Math.random() * result.length)]
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Container