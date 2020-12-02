import { RiArrowDropDownLine } from 'react-icons/ri';

const Select = ({items, name, value, callback}) => {
    return (
        <div className="relative w-full">
            <div className="absolute z-10 inset-y-0 right-0 flex items-center">
                <RiArrowDropDownLine className="text-gray-200 h-6 w-6" />
            </div>
            <select className={`text-gray-200 cursor-pointer block bg-transparent w-full border-b  border-gray-600 
            border-opacity-50 appearance-none`} name={name} id={name} value={value} onChange={callback}>
                {
                    items.map((item) => {
                        return (
                            <option className="bg-bg2 hover:bg-blue-900" value={ item.id }>
                                { item.name }
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select;