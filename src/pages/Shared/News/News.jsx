import { useEffect, useState } from "react"
import SingleNews from "./SingleNews";


const News = () => {
    const [news,setNews]=useState([]);
    useEffect(()=>{
    fetch('news.json')
    .then(res => res.json())
    .then(data => setNews(data))
    },[])
  return (
    <div>
        <h2 className="font-bold mb-3">Dragon News Home</h2>
      <div className="border-2">
        {
            news.slice(0,2).map(singleNews => <SingleNews key={singleNews._id} singleNews={singleNews}></SingleNews>)
        }
      </div>
    </div>
  )
}

export default News