import Home from '../modules/home'
import withData from '../config/withData'
import { Layout } from '../modules/common'

export default withData((props) => {
    return (
        <Layout {...props} home="true">
            <Home {...props}></Home>
        </Layout>
    )
})

