import Home from '../../modules/home'
import withData from '../../config/withData'

export default  withData((props) => {
    return(
        <Home {...props}></Home>
    )
})