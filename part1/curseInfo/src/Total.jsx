
const Total = (props) => {

  console.log("Soy total y traigo estos props: ", props)
  let total = 0;
  props.parts.map((parent) => total += parent.exercises)
  return(
    <>
      <p>
        Number of exercises  {total}
      </p>
    </>
  )

}

export default Total