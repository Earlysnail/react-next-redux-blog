import Error from '../../modules/error'
import withData from '../../config/withData'

export default  withData((props) => {
    return(
        <Error {...props}></Error>
    )
})