import "./Hero.css"
export function Hero() {
    return (
        <div className="py-20 hero" >
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-2 text-white">
                    API utilitzada per aquesta pràctica
                </h2>
                <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    <a href="https://www.themoviedb.org/?language=es">API The Movie DB</a>
                </button>
            </div>
        </div>)
}