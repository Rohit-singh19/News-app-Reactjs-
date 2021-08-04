import React, {useState,useEffect} from 'react'
import '../App.css';

function Main() {

    const [articles,setArticles] = useState([]);
    const [search,setSearch] = useState("")

    
    useEffect(() => {

        let url = `https://newsapi.org/v2/everything?q=latest&apiKey=14726c0439d941ed92da9dbb97ee2863`
        
        fetch(url)
        .then((response)=> response.json())
        .then((news)=>{
            console.log(news.articles);
            setArticles(news.articles);
            // console.log(news.articles);
        })

        setSearch("All Latest News");

      },[]);

      function searchNews() {
        let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=14726c0439d941ed92da9dbb97ee2863`
        
        fetch(url)
        .then((response)=> response.json())
        .then((news)=>{
            // console.log(news.articles)
            setArticles(news.articles);
        })
      }

    return(
        <div className="container">
            <header>
                <div className="logo"><span>N</span><span>E</span><span>W</span><span>S</span></div>
                <input className= "search-box" placeholder="Search News" onChange={(e)=>setSearch(e.target.value)}/>
                <button className="search" onClick={searchNews}>Search</button>
            </header>

            <section className="news-show">
                <h1 className="searchtxt">{search}</h1>
                {
                    articles.map((article,index)=>(
                        <div key={index} className="news">
                            <div className="news-img">
                                <img src={article.urlToImage} alt=""/>
                            </div>
                            <div className="news-detail">
                                <h2 className="news-tittle">{article.title}</h2>
                                <h3 className="news-author">{article.author}</h3>
                                <p className="news-content">{article.content}</p>
                                <a href={article.url} target ="_blank">
                                    <button className="btn">Read More</button>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default Main;