import Draw from '../../modules/draw'
import withData from '../../config/withData'

export default  withData((props) => {
    return(
        <Draw {...props}></Draw>
    )
})