function getArticleGenerator(articles) {
    let arrArticles = Array.from(articles);
    let contentRef = document.getElementById('content');

    return function () {
        if (!arrArticles.length) {
            return;
        }

        let articleContent = arrArticles.shift();
        let newArticle = document.createElement("article");
        newArticle.textContent = articleContent;
        contentRef.appendChild(newArticle);
    }
}
