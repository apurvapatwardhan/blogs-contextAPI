import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


const AppContext = createContext();

function AppContextProvider({children}) {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //fill data
    async function fetchData(p = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${p}`;
        console.log(url)
        try {
            const result = await fetch(url);
            const output = await result.json();
            console.log(output)
            setPage(output.page);
            setPosts(output.posts);
            setTotalPages(output.totalPages);
            setLoading(false);
        }
        catch(err) {
            setLoading(false);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
    }
    
    function handlePageChange(p) {
        setPage(p);
        fetchData(p);
        console.log(p)
    }

    const values = {
        loading,
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        fetchData,
        handlePageChange
    }

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export {AppContext, AppContextProvider}; 