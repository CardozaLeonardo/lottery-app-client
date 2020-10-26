import PaginationItem from './PaginationItem';

const Pagination = () => {

    return(
        <div className="flex mt-3 mx-auto">
            <PaginationItem url="/" term="<" previus/>
            <PaginationItem url="/" term="1" />
            <PaginationItem url="/" term="2" />
            <PaginationItem url="/" term="3" active/>
            <PaginationItem url="/" term="..." disabled />
            <PaginationItem url="/" term="4" />
            <PaginationItem url="/" term=">" />
        </div>
    )
}

export default Pagination;