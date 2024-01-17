import axios from 'axios'
import {useState} from 'react'

export function Content() {
  const [articles, setArticles] = useState([])
  const getNews = () => {
    console.log('geting news')
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`).then(response => {
      console.log(response.data)
      setArticles(response.data.articles)
    })
  }
  
  return (
    <div>
      <h1>Welcome to React!</h1>
      <button onClick={getNews}>Get the News</button>
      {articles.map(article => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  )
}