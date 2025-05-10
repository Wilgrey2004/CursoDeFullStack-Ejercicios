const Content = (props) => {
  console.log("He aparecido y traigo estos props: ", props)
  return(
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  )

}

export default Content