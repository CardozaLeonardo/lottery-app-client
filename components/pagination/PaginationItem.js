
const PaginationItem = ({term, index, disabled, previus, next, onSelectedItem}) => {

    var current = index == term ? "bg-active" : "bg-bg2 hover:bg-blue-900";
    var disabledClass = disabled ?  "pointer-events-none" : "";
    var arrow = previus ? "rounded-l-lg" : "";
    var nextArrow = next ? "rounded-r-lg": "";

    const execute = () => {
        if(nextArrow != "") {
            console.log("Next has been pressed!");
            onSelectedItem(index + 1);
            return;
        }

        if(arrow != "" )
        {
            onSelectedItem(index - 1);
            return;
        }

        onSelectedItem(term);
    }


    return(
        <button onClick={execute} className={`${current} text-white text-xs border-none block mr-2 px-4 
        py-2 ${disabledClass} ${arrow} ${nextArrow}`}>
            { term }
        </button>
    )
}

export default PaginationItem;