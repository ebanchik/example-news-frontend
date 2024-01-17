import axios from 'axios'
import {useState} from 'react'

export function Content() {
  const [articles, setArticles] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  // const getNews = () => {
  //   console.log('geting news')
  //   axios.get("http://localhost:3000/articles").then(response => {
  //     console.log(response.data)
  //     setArticles(response.data.articles)
  //   })
  // }
  
  const searchForNews = () => {
    console.log('searching')
    axios.get(`http://localhost:3000/articles?search=${searchTerm}`).then(response => {
      console.log(response.data)
      setArticles(response.data.articles)
    })
  }


  
  return (
    <div>
      <h1>Welcome to React!</h1>
      Search for news: <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      <button onClick={searchForNews}>Search</button>
      {articles.map(article => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  )
}