import { useRowSelect, useTable } from "react-table";
import {columns} from './dataSource';
import Pagination from '../pagination/Pagination';

const Table = ({data}) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        
    } = useTable({
        columns,
        data
    })

    return(

        <div {...getTableProps()}>

            {/*  Header */}
            <div>
                {
                    headerGroups.map(headerGroup => (
                        
                        <div {...headerGroup.getHeaderGroupProps()} className="h-12 flex py-2 px-6 items-center bg-bg2 mt-1 
                        justify-between text-sm text-gray-300 text-opacity-75">
                            {headerGroup.headers.map(column => (
                                    <div {...column.getHeaderProps()} className="w-full">
                                    {column.render('Header')}
                                </div>
                            ))}
                        </div> 
                    ))
                }
                
            </div>

            {/*Body */}
            <div {...getTableBodyProps()}>
                
                {
                    rows.map((row, i) =>{
                        prepareRow(row)

                        return(
                            <div {...row.getRowProps} key={row.cells[i].value} className="h-10 flex py-2 px-6 items-center bg-bg2 mt-1 justify-between hover:bg-blue-900 text-xs">
                                {
                                    row.cells.map(cell => {
                                        return(
                                            <div {...cell.getCellProps()} className="w-full">
                                                {cell.render('Cell')}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
             
            </div>

            
        </div>
    )
}

export default Table;