class Stringer {
    innerString;
    innerLength;
    
    constructor(innerString, innerLength){
      this.innerString = innerString;
      this.innerLength = innerLength;
    }
    
    increase(length){
      this.innerLength = this.innerLength + length;
    }
    
    decrease(length){
      this.innerLength = this.innerLength - length;
      if (this.innerLength < 0){
        this.innerLength = 0;
      }    
    }
    
    toString(){
      if(this.innerLength < this.innerString.length){
      return this.innerString.slice(0, this.innerLength) + "..."
    } else {
      return this.innerString;
    }
  }
  }