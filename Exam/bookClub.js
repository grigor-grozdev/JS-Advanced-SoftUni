class BookClub {
    library;
    books = [];
    members = [];
    constructor (library){
        this.library = library
    }

    addBook (title, author) {

        let data = this.books.find(p => p.title == title && p.author == author);

        if (data) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        }

        this.books.push({title, author})
        return `The book "${title}" by ${author} has been added to ${this.library} library.`
    }

    addMember (memberName) {

        if (this.members.indexOf(memberName) == -1) {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`
        } else {
            return `Member ${memberName} is already a part of the book club.`
        }

    }

    assignBookToMember (memberName, bookTitle) {
        if (this.members.indexOf(memberName) == -1) {
            throw new Error (`Member ${memberName} not found.`)
        }

        let data = this.books.find(p => p.title == bookTitle);
        if (!data) {
            throw new Error (`Book "${bookTitle}" not found.`)
        }
        let author = data.author;
        let index = this.books.indexOf(data);
        this.books.splice(index, 1);
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${author}.`
    }

    generateReadingReport () {

        if (this.members.length == 0) {
            return `No members in the book club.`
        }

        if (this.books.length == 0) {
            return `No available books in the library.`
        }

        let result = [`Available Books in ${this.library} library:`];
        
        for (let {title, author} of this.books){
            result.push(`"${title}" by ${author}`)
        }

        return result.join('\n');
    }

}


const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());


