import DrawPage from '../../modules/drawPage'
import withData from '../../config/withData'
import { Layout } from '../../modules/common/Layout'

export default  withData((props) => {
    return(
        <Layout {...props}>
            <DrawPage {...props}></DrawPage>
        </Layout>
    )
})