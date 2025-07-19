import Book from "./Book";
const App=()=>
{
 

  let name="kavi"
  let age =24
 
 
 
 
 
 
      return(<>
     
       <h1> Welcome in React</h1>
       <h2> Name : {name}</h2>
           <h2> Age : {age}</h2>
        <Book name="React" price="200" qty ="200" location="India" pic ="../Reactbook.jpeg"/>

        <Book name="Java" price="500" qty ="220"location="India"/>

        <Book name="Spring Boot" price="400" qty ="520"location="India"/>

        <Book name="HTML" price="600" qty ="320"location="India"/>
     
      </>)
 
}
export default App;
 
