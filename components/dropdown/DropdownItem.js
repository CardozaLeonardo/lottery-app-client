
const DropdownItem = ({link, term}) => {

    return(
        <a href={link} className="no-underline h-8 pl-4 text-gray-800 hover:bg-blue-600 
        hover:text-red-100 text-sm block leading-loose">
          {term}
       </a>
    )
}

export default DropdownItem;