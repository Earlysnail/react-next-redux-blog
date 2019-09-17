import SignIn from '../../modules/signIn'
import withData from '../../config/withData'


export default withData((props)=>{
    return (
        <SignIn {...props}></SignIn>
    )
})