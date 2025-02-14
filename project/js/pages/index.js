fetchUrl('data/news.json', (data)=>{
    if (!data) { return; }

    const newsContainerMain = document.getElementById("newsContainerMain");
    const newsContainerSecondary = document.getElementById("newsContainerSecondary");

    // Add first 5 new news articles
    let index = 0;
    data.forEach(article => {
        newsCard = createNewsCard(
            article.thumbnail,
            article.title,
            article.time,
            article.description,
            index == 0
        )

        if (index === 0) {
            newsContainerMain.appendChild(newsCard);
        } else {
            newsContainerSecondary.appendChild(newsCard);
        }

        index++;
    });
})