import FadeLoader from 'react-spinners/FadeLoader';

const Spinner = ({height=15, color='white', width=5, radius=2}) => {

    return (
        <div className="flex justify-center">
            <FadeLoader height={height} width={width} radius={radius} color={color} 
            margin={2} loading={true}/>
        </div>
    )
}

export default Spinner;