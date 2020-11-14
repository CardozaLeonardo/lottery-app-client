
const Number = ({ action, number, selected }) => {

    const selectedTag = selected == number ? 'bg-active':'bg-bg1 hover:bg-blue-900';
   
    return(
        <div onClick={() => action(number)} className={`rounded-full text-gray-200 text-xs font-bold py-1 cursor-pointer
        mb-1 text-center text-opacity-75 w-11/12 ${selectedTag}`} >
            { number }
        </div>
    )
}

export default Number;