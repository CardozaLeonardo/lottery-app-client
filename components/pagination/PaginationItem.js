
const PaginationItem = ({url, term, active, disabled, previus, next}) => {

    var current = active ? "bg-active" : "bg-bg2";
    var disabledClass = disabled ?  "pointer-events-none" : "";
    var arrow = previus ? "rounded-l-lg" : "";



    return(
        <a href={ url } className={`${current} text-white text-xs no-underline block mr-2 px-4 
        py-3 hover:bg-blue-900 ${disabledClass} ${arrow}`}>
            { term }
        </a>
    )
}

export default PaginationItem;