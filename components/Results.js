import Thumbnails from "./Thumbnails";

export default function Results({results}){
    return(
        <>
        <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-4 3xl: flex flex-wrap justify-center">
            {results.map((result) => (
                <Thumbnails key={results.id} result={result}/>
            ))}
        </div>
        
        </>
    )
}