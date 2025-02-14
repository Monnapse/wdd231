fetchUrl('data/news.json', (data)=>{
    if (!data) { return; }

    const newsContainer = document.getElementById("newsContainer");

    data.forEach(article => {
        newsCard = createNewsCard(
            article.thumbnail,
            article.title,
            article.time,
            article.description,
            false
        )

        newsContainer.appendChild(newsCard);
    });
})