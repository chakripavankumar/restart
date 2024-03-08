import Card from "./components/Card";

function App() {
  const samepleCard={
    name:"jhon doe",
    description: "web deveeloper",
    socialMedia: {
      linkedin:"https:www.dummy.com",
      twitter:"https: www.dummy.com"
    },
    interests: "react"
  };
  return (
   
   <div>
    <Card {...samepleCard3}/>
   </div>
  )
}

export default App
