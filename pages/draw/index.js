import DrawPage from '../../modules/drawPage'
import withData from '../../config/withData'
import { Layout } from '../../modules/common/Layout'

export default  withData((props) => {
    return(
        <Layout>
            <DrawPage {...props}></DrawPage>
        </Layout>
    )
})