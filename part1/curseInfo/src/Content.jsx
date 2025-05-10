import Part from "./Part"


const Content = (props) => {
  console.log("He aparecido y traigo estos props: ", props)
  return(
    <>
      
      <Part part={props.part1} exercises={props.exercises1}></Part>
      <Part part={props.part2} exercises={props.exercises2}></Part>
      <Part part={props.part3} exercises={props.exercises3}></Part>
      
    </>
  )

}

export default Content