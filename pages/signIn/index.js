import SignIn from '../../modules/signIn'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'

export default withData((props)=>{
    return (
        <Layout {...props}>
            <SignIn {...props}></SignIn>
        </Layout>
    )
})