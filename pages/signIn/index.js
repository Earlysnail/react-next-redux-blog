import SignIn from '../../modules/signIn'
import withData from '../../config/withData'
import { Layout } from '../../modules/common/Layout'

export default withData((props)=>{
    return (
        <Layout>
            <SignIn {...props}></SignIn>
        </Layout>
    )
})