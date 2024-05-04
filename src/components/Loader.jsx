import { Oval } from 'react-loader-spinner'

const Loader = ({bg}) => {
  return(
  <Oval
    visible={true}
    height="80"
    width="50"
    color="#2563EB"
    secondaryColor="#2563EB"
    ariaLabel="oval-loading"
    wrapperStyle={{}}
    wrapperClass={`flex justify-center items-center h-screen ${bg}`}
    />)
}

export default Loader