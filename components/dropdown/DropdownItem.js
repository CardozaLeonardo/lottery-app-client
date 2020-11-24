
const DropdownItem = ({callback, term}) => {

    return(
        <button onClick={() => callback()} className="no-underline h-8 pl-4 text-gray-200 hover:bg-blue-900 
        hover:text-red-100 text-sm text-left block leading-loose w-full">
          {term}
       </button>
    )
}

export default DropdownItem;