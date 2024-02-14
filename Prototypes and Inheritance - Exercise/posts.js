function solution() {

    class Post {
        title;
        content;
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}` + `\n` + `Content: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        likes;
        dislikes;
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = [`Post: ${this.title}`,
            `Content: ${this.content}`,
            `Rating: ${this.likes - this.dislikes}`];
            if (this.comments.length == 0) {
                return result.join('\n');
            } else {
                result.push('Comments:');
                for (let comment of this.comments) {
                    result.push(` * ${comment}`);
                }
                return result.join('\n');
            }
        }
    }

    class BlogPost extends Post {
        views;
        constructor(title, content) {
            super(title, content);
            this.views = 0;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return `Post: ${this.title}` + `\n`
                + `Content: ${this.content}` + `\n`
                + `Views: ${this.views}`
        }

    }


    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
//scm.addComment("Very good post");
//scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let blog = new classes.BlogPost("blog title", "blog content");
blog.view();
blog.view();
console.log(blog.view());

console.log(blog.toString())
