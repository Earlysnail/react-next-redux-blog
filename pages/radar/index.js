import RadarPage from '../../modules/RadarPage'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'

export default  withData((props) => {
    return(
        <Layout {...props}>
            <RadarPage {...props}></RadarPage>
        </Layout>
    )
})