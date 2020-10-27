
const InputGroup = ({children, label}) => {
    return (
        <div className="mb-4">
            <label className="text-gray-200 text-sm">{ label }</label>
            { children }
        </div>
    )
}

export default InputGroup;