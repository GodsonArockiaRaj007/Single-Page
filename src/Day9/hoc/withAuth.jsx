
const withAuth = (WrapperComponent) => (props)=>{
    return<WrapperComponent {...props}/>
}

export default withAuth