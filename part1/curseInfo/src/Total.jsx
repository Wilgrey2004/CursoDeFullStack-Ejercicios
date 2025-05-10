const Total = (props) => {
  console.log("He aparecido y traigo estos props: ", props)
  return(
    <>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  )

}

export default Total