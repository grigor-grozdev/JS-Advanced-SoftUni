class List{
  
    list = [];
    
    add(element){
      this.list.push(element);
      this.list.sort((a, b) => a - b);
      return this.list
    }
  
    remove(index){
      if (index < 0 || index >= this.list.length){
        throw new Error("invalid index")
      } else {
        this.list.splice(index, 1);
        return this.list
      }
    }
  
    get(index){
      if (index < 0 || index >= this.list.length){
        throw new Error("invalid index")
      } else {
        return this.list[index];
      }
    }
    
    get size(){
      return this.list.length;
    }
    
  }