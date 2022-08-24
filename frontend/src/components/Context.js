import { useState, useEffect, createContext } from "react";

export const Context = createContext(null);
export const Provider = ({ children }) => {
    const [modal, setModal] = useState(false)
    const [netflixD, setNetflixD] = useState([])
    const [post, setPost] = useState("");
    
    // useEffect(()=>{
    //     const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'bb0ed59ae7mshc6b4b6eefa17af6p1c0939jsn8f8347b43f26',
    //         'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    //     }   
    //     };
    //     fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=ca&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         setNetflixD(response.results)
    //     })
    //     .catch(err => console.error(err));
    // }, [])
    useEffect(()=>{
        setNetflixD([
        {age: 10,
            backdropPath: "/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg",
            backdropURLs: {300: 'https://image.tmdb.org/t/p/w300/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg', 780: 'https://image.tmdb.org/t/p/w780/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg', 1280: 'https://image.tmdb.org/t/p/w1280/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg', original: 'https://image.tmdb.org/t/p/original/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg'},
            cast: ['Helen Mirren', 'Anne Frank', 'Martina Gatti', 'Arianna Szorenyi'],
            countries: ['IT'],
            genres: [18, 36],
            imdbID: "tt9850370",
            imdbRating: 65,
            imdbVoteCount: 1555,
            originalLanguage: "en",
            originalTitle: "#AnneFrank. Parallel Stories",
            overview: "One single Anne Frank moves us more than the countless others who suffered just as she did but whose faces have remained in the shadows-Primo Levi. The Oscar®-winning Helen Mirren will introduce audiences to Anne Frank's story through the words in her diary. The set will be her room in the secret refuge in Amsterdam, reconstructed in every detail by set designers from the Piccolo Theatre in Milan. Anne Frank this year would have been 90 years old. Anne's story is intertwined with that of five Holocaust survivors, teenage girls just like her, with the same ideals, the same desire to live: Arianna Szörenyi, Sarah Lichtsztejn-Montard, Helga Weiss and sisters Andra and Tatiana Bucci. Their testimonies alternate with those of their children and grandchildren.",
            posterPath: "/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg",
            posterURLs: {92: 'https://image.tmdb.org/t/p/w92/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg', 154: 'https://image.tmdb.org/t/p/w154/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg', 185: 'https://image.tmdb.org/t/p/w185/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg', 342: 'https://image.tmdb.org/t/p/w342/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg', 500: 'https://image.tmdb.org/t/p/w500/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg', 780: 'https://image.tmdb.org/t/p/w780/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg', original: 'https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg'},
            runtime: 92,
            significants: ['Sabina Fedeli', 'Anna Migotto'],
            streamingInfo: "netflix",
            tagline: "",
            title: "#AnneFrank. Parallel Stories",
            tmdbID: "610643",
            tmdbRating: 71,
            video: "FzT7-NfkxLA",
            year: 2019}
    ])
    }, [])
    
    return (
        <Context.Provider
        value={{
            modal,
            setModal,
            netflixD,
            post,
            setPost
        }}
        >
        {children}
        </Context.Provider>
    );
    };