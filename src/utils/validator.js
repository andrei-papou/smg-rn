class Validator {

    constructor(value) {
        this.value = value;
    }

    required(message = 'This field is required.') {
        if (this.error) return this;
        if (!this.value) this.error = message;
        return this;
    }

    date(message = 'Value is not a valid date') {
        if (this.error) return this;
        if (!this.value.hasOwnProperty('year') ||
            !this.value.hasOwnProperty('month') ||
            !this.value.hasOwnProperty('day')) this.error = message;
        console.log(this.error);
        return this;
    }

    time(message = 'Value is not a valid time') {
        if (this.error) return this;
        if (!this.value.hasOwnProperty('hour') ||
            !this.value.hasOwnProperty('minute')) this.error = message;
        return this;
    }

    email(message = 'Value is not a valid email.') {
        if (this.error) return this;

        const requirements = [
            this.value.includes('@'),
            this.value.includes('.'),
            this.value.indexOf('.') !== this.value.length - 1,
            this.value.indexOf('@') < this.value.indexOf('.'),
            this.value.indexOf('@') - this.value.indexOf('.') > 1
        ];
        if (requirements.filter(r => !r).length) this.error = message;
        return this;
    }

    minLength(length, message = 'Value is too short.') {
        if (this.error) return this;
        if (this.value.length < length) this.error = message;
        return this;
    }

    maxLength(length, message = 'Value is too long.') {
        if (this.error) return this;
        if (this.value.length > length) this.error = message;
        return this;
    }

    int() {
       if (this.error) return this;
       if (Math.round(this.value) !== this.value) this.error = message;
       return this;
    }

}

export default validate = value => new Validator(value);
