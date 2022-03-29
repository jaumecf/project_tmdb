import Detalls from "../components/Detalls";
import React, { useState, useEffect } from 'react';

const NowPlaying=(props)=>{
    const [data, setData] = useState([]);
    const [detalls, setDetalls] = useState(null);
    let path = 'https://image.tmdb.org/t/p/original';

    async function detallsMovie(id) {
        const response = await fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=de2a09a17d2ed51404265e50bfaf5868&language=es-ES');
        const currentData = await response.json();
        setDetalls(currentData);
        console.log(currentData);
    }
    function mostraDetalls(id){
        if (detalls != null){
            if(detalls.id == id){
                return <Detalls detalls={detalls}/>
            }
        }
    }
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=de2a09a17d2ed51404265e50bfaf5868&language=es-ES&page=1');
            const currentData = await response.json();
            setData(currentData.results);
            console.log(currentData.results);
        }
        fetchData();
    },[])
    return (
        <div className="grid grid-cols-3 gap-4 m-3">
            {data.map(peli=> {
                return (<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800" key={peli.id}>
                    <div className="pt-6 space-y-4">
                        <button onClick={(e) => detallsMovie(peli.id, e)}>
                            <img src={path+peli.poster_path}/>
                            <figcaption className="font-medium">
                                <div className="text-sky-500 dark:text-sky-400">
                                    {peli.title}
                                </div>
                            </figcaption>
                            {mostraDetalls(peli.id)}
                        </button>
                    </div>
                </figure>)
            })}
        </div>
    )
}
export default NowPlaying;

/*

<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://picsum.photos/384/512"
                 alt="" width="384" height="512"/>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        Sarah Dayan
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        Staff Engineer, Algolia
                    </div>
                </figcaption>
            </div>
        </figure>

*/
