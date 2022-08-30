import { useState, useEffect, createContext } from "react";

export const Context = createContext(null);
export const Provider = ({ children }) => {
    const [netflixD, setNetflixD] = useState([])
    const [disneyD, setDisneyD] = useState([])
    const [primeD, setPrimeD] = useState([])
    const [appleD, setAppleD] = useState([])
    const [huluD, setHuluD] = useState([])
    const [post, setPost] = useState("");
    const [genres, setGenres] = useState([])
    const [postList, setPostList] = useState()

    // // genresArray
    // useEffect(()=> {
    //     console.log("test1")
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'bb0ed59ae7mshc6b4b6eefa17af6p1c0939jsn8f8347b43f26',
    //             'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    //         }
    //     };
        
    //     fetch('https://streaming-availability.p.rapidapi.com/genres', options)
    //         .then(response => response.json())
    //         .then(response => {setGenres(response)})
    //         .catch(err => console.error(err));
    // }, [])

    // // netflixArray
    // useEffect(()=>{
    //     console.log("test")
    //     const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'bb0ed59ae7mshc6b4b6eefa17af6p1c0939jsn8f8347b43f26',
    //         'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    //     }   
    //     };
    //     fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=ca&service=netflix&type=movie&output_language=en&language=en', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         setNetflixD(response.results)
    //     })
    //     .catch(err => console.error(err));
    // }, [])

    // // disneyArray
    // useEffect(()=>{
    //     console.log("test")
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
    //         setDisneytD(response.results)
    //     })
    //     .catch(err => console.error(err));
    // }, [])
    // // primeArray
    // useEffect(()=>{
    //     console.log("test")
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
    //         setPrimeD(response.results)
    //     })
    //     .catch(err => console.error(err));
    // }, [])
    // // appleArray
    // useEffect(()=>{
    //     console.log("test")
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
    //         setAppleD(response.results)
    //     })
    //     .catch(err => console.error(err));
    // }, [])

    // // huluArray
    // useEffect(()=>{
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'bb0ed59ae7mshc6b4b6eefa17af6p1c0939jsn8f8347b43f26',
    //             'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    //         }
    //     };
        
    //     fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hulu&type=movie&output_language=en&language=en', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response)
    //         setHuluD(response.results)
    //     })
    //     .catch(err => console.error(err));
    // }, [])


    useEffect(()=>{
        setGenres({1: 'Biography', 2: 'Film Noir', 3: 'Game Show', 4: 'Musical', 5: 'Sport', 6: 'Short', 7: 'Adult', 12: 'Adventure', 14: 'Fantasy', 16: 'Animation', 18: 'Drama', 27: 'Horror', 28: 'Action', 35: 'Comedy', 36: 'History', 37: 'Western', 53: 'Thriller', 80: 'Crime', 99: 'Documentary', 878: 'Science Fiction', 9648: 'Mystery', 10402: 'Music', 10749: 'Romance', 10751: 'Family', 10752: 'War', 10763: 'News', 10764: 'Reality', 10767: 'Talk Show'})
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
            streamingInfo: {netflix:"sss"},
            tagline: "",
            title: "#AnneFrank. Parallel Stories",
            tmdbID: "610643",
            tmdbRating: 71,
            video: "FzT7-NfkxLA",
            year: 2019},
            {age: 10,
                backdropPath: "/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg",
                backdropURLs: {300: 'https://image.tmdb.org/t/p/w300/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg', 780: 'https://image.tmdb.org/t/p/w780/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg', 1280: 'https://image.tmdb.org/t/p/w1280/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg', original: 'https://image.tmdb.org/t/p/original/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg'},
                cast: ['Helen Mirren', 'Anne Frank', 'Martina Gatti', 'Arianna Szorenyi'],
                countries: ['IT'],
                genres: [7, 12],
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
                streamingInfo: {netflix:"sss"},
                tagline: "",
                title: "#AnneFrank. Parallel Stories",
                tmdbID: "610643",
                tmdbRating: 71,
                video: "FzT7-NfkxLA",
                year: 2019}
    ]) 
    setHuluD([
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
            streamingInfo: {hulu:"sss"},
            tagline: "",
            title: "#AnneFrank. Parallel Stories",
            tmdbID: "610643",
            tmdbRating: 71,
            video: "FzT7-NfkxLA",
            year: 2019},
            {age: 10,
                backdropPath: "/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg",
                backdropURLs: {300: 'https://image.tmdb.org/t/p/w300/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg', 780: 'https://image.tmdb.org/t/p/w780/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg', 1280: 'https://image.tmdb.org/t/p/w1280/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg', original: 'https://image.tmdb.org/t/p/original/pYziM5SEmptPW0LdNhWvjzR2zD1.jpg'},
                cast: ['Helen Mirren', 'Anne Frank', 'Martina Gatti', 'Arianna Szorenyi'],
                countries: ['IT'],
                genres: [7, 12],
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
                streamingInfo: {hulu:"sss"},
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
            netflixD,
            post,
            setPost,
            genres,
            postList,
            setPostList, 
            appleD,
            huluD,
            primeD,
            disneyD
        }}
        >
        {children}
        </Context.Provider>
    );
    };