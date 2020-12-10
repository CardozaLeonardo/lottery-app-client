
const Container = ({children}) => {

    return(
        <div className="px-3 pt-3 rounded min-h-full" style={{marginLeft: '270px', width: 'calc(100% - 270px)'}}>
            { children }
        </div>
    )
}

export default Container;