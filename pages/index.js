import Home from '../modules/home'
import withData from '../config/withData'
import { Layout } from '../modules/common/Layout'

export default withData((props) => {
    return (
        <Layout {...props}>
            <Home {...props}></Home>
        </Layout>
    )
})

