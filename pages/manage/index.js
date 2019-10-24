import Manage from '../../modules/manage'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'

export default  withData((props) => {
    return(
        <Layout {...props}>
            <Manage {...props}></Manage>
        </Layout>
 
    )
})