import Error from '../../modules/error'
import withData from '../../config/withData'
import { Layout } from '../../modules/common/Layout'

export default  withData((props) => {
    return(
        <Layout {...props}>
            <Error {...props}></Error>
        </Layout>
 
    )
})