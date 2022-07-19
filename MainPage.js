import React,{useState,useEffect} from 'react'
import WatchList from './WatchList'
import './index.css'
//https://api.jikan.moe/v4/anime 
//https://api.jikan.moe/v4/anime?page=2
const App=()=>{
    const [enimeData,setEnimeData]=useState([])
    const [search,setSearch]=useState("")
    const [page,setPage]=useState(true)
    const [watchList,setWatchList]=useState(["Add Item"])
    const AddToWatchList=()=>{
        setWatchList(watchList.push(enimeData.title))
    }
    useEffect(()=>{
        fetch("https://api.jikan.moe/v4/anime")
        .then(data=>data.json())
        .then(ans=>setEnimeData(ans.data))
        
    },[])
    return(
        <div>{ page===true ?
        <form className='form-design' >
            <center >
                <input type="text" className='input-feild-design'
                placeholder='search...'
                value={search}
                onChange={(e)=>setSearch(e.target.value)} /><br />

                <button onClick={()=>setPage(false)} className="button-design">
                    watchList
                    </button>
                 {enimeData.filter(enimeData=>enimeData.title.toLowerCase().includes(search)).map((item,index)=>
                  <div className='card-design'>
                   <h3 style={{color:"red"}}>Title : {item.title}</h3>
                   <img src={item.images.jpg.image_url} alt="img" />
                   <div className='details'>
                        Rating: {item.rating}<br />
                        Ranking: {item.rank}<br />
                        Source: {item.source} <br />
                        Status: {item.status}<br />
                        Episodes: {item.episodes} <br />
                        Duration: {item.duration} <br />
                    </div>
                   <button  className="button-design" onClick={AddToWatchList}>
                    Add To Watch List
                    </button>
                 </div>)
                }
             </center>
        </form> : <WatchList WatchList={watchList}/>
}</div>
    )
}
export default App;