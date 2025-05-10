const Header = (props) => {

  console.log("He aparecido y traigo estos props: ", props)

  return(
    <>
      <h1>{props.course}</h1>
    </>
  )

}

export default Header