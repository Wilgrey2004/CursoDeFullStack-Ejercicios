import Part from "./Part"


const Content = (props) => {
  console.log("Soy Content y traigo estos props: ", props)
  return(
    <>
      
      {
        props.parts.map((parent) => {
          return (
            <Part part={parent.name} exercises={parent.exercises} key={parent.name} />
          )
        })
      }
      
    </>
  )

}

export default Content