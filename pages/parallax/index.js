import Parallax from '../../modules/parallax'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'

export default  withData((props) => {
    return(
        <Layout {...props}>
            <Parallax {...props}></Parallax>
        </Layout>
 
    )
})