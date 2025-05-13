const Header = (props) => {

  console.log("Soy Header y traigo estos props: ", props)

  return(
    <>
      <h1>{props.course}</h1>
    </>
  )

}

export default Header