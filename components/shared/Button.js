import cx from 'classnames';

const Button = ({children, type = "button", variant = 'default', action = () => {}}) => {

    return (
        <button onClick={action} type={type} className={cx( ` rounded-full  
        cursor-pointer focus:outline-none flex items-center`,{
            'text-gray1 bg-transparent border-2 border-opacity-25 text-opacity border-gray1': variant.includes('default'),
            'text-white border-primary bg-primary': variant.includes('primary'),
            'text-secondary border-2 bg-secondary border-secondary': variant.includes('secondary'),
            'text-primary border-2 border-primary ': variant.includes('pri-outline'),
            'text-secondary border-2 border-secondary': variant.includes('sec-outline'),
            'text-sm px-4 py-1': variant.includes('medium'),
            'text-base px-8 py-3' : variant.includes('large'),
            'justify-center': variant.includes('center'),
            'justify-between': variant.includes('between'),
            'w-full': variant.includes('full-width')
        })}>
            { children }
        </button>
    )
}



export default Button;