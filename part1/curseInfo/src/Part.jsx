const Part =(props) => {
  console.log("Soy Parts y he traido estos props: ", props)
  return(
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

export default Part;