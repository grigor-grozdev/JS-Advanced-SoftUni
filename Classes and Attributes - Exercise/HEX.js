class Hex {
    value;
    constructor (value) {
        this.value = value
    }

    valueOf(){
        return this.value;
    }

    toString() {
        return "0x" + this.value.toString(16).toUpperCase()
    }

    plus(hex) {
        return new Hex(this.value + Number(hex));
    }

    minus(hex) {
        return new Hex(this.value - Number(hex));
    }

    parse(str) {
        return parseInt(str, 16)
    }

}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
