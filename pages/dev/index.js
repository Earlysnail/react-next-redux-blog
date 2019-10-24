import { PlayImgApp } from '../../components'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'

export default withData((props) => {
    return (
        <Layout {...props}>
            <PlayImgApp></PlayImgApp>
        </Layout>
    )
})