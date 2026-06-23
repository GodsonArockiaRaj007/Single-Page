
const withLoading = (WrappedComponent)=>(props) => {
  return<WrappedComponent {...props}/>
}

export default withLoading