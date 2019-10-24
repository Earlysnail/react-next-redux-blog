import PlayImgPage  from '../../modules/playImgPage'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'

export default withData((props) => {
    return (
        <Layout {...props}>
            <PlayImgPage {...props}></PlayImgPage>
        </Layout>
    )
})