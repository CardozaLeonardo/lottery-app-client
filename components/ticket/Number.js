
const Number = ({ action, number, selected, list }) => {

    const selectedTag = selected == number ? 'bg-active':'bg-bg1 hover:bg-blue-900';

    const exist = list.find(p => p.number == number) ? true : false;
    const tags = exist ? 'bg-gray-500 cursor-default': `${selectedTag} cursor-pointer`;
    const clickAction = exist ? () => {} : action;
   
    return(
        <div onClick={() => clickAction(number)} className={`rounded-full text-gray-200 text-xs font-bold py-1 
        mb-1 text-center text-opacity-75 w-11/12 ${tags}`} >
            { number }
        </div>
    )
}

export default Number;