import { runInThisContext } from "vm";

export class Errors {
    constructor() {
        this.errorMessages = ''
        this.errorFields = []
    }
    
    recordFromResponse({ errors }) {
        // Clear old errors
        this.errorFields = []
        this.errorMessages = ''
        // Write new errors if they are present in the Response from Server
        if ( !! errors) {
            errors.forEach( (item) => {
                this.errorFields.push(item.kind)
                this.errorMessages += item.msg + '<br>'
            });
        } else {
            this.errorMessages = 'Something wrong!'
        }
    }

    check(data) {
        this.clearAll()
        this.checkIfEmpty(data)
    }

    checkIfEmpty(data) {
        for (let prop in data) {
            let trimmedValue = data[prop].trim()
            if (trimmedValue == '') {
                this.errorFields.push(prop)
            }
        }
    }

    showAll() {
        return this.errorMessages
    }
    
    contains(field) {
        return this.errorFields.includes(field)
    }

    any() {
        return this.errorFields.length > 0
    }

    absent() {
        return !(this.errorFields.length > 0)
    }
    
    clearAll() {
        this.errorFields = []
        this.errorMessages = ''
    }

    clearField(field) {
        this.errorFields = this.errorFields.filter(item => item !== field)
    }
}