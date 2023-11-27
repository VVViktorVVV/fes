import React, {useState} from "react";
import Form from "./components/form/form";
import Table from "./components/table/table";



function App() {

  const [arrayResult, setArrayResult] = useState([]);
  
  return (
   
      
        <div className="App">
      <Form setArrayR={setArrayResult} />

      <Table arrayR={arrayResult} />
      
    </div>
     
    
  );
}

export default App;
