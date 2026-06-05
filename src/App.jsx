import Header from "./Components/Header";
import MainPage from './Components/MainPage';
import dataMountains from "./Components/dataMountains";
import dataDeserts from "./Components/dataDeserts";
import dataBeaches from "./Components/dataBeaches";
import dataForests from "./Components/dataForests";
import dataCities from "./Components/dataCities";
import Footer from "./Components/Footer";



const App = () => {


const MountainElements = dataMountains.map((entry)=> {

    return (
     <MainPage 

         key={entry.id}
         entry={entry}

     />
    )
 })

 const DesertElements = dataDeserts.map((entry)=> {

     return (
        <MainPage
           key={entry.id}
           entry={entry}
        />
     )
 })
 const BeachElements = dataBeaches.map((entry)=> {

  return (
     <MainPage
        key={entry.id}
       entry={entry}
     />
  )
})
const ForestElements = dataForests.map((entry)=> {

  return (
     <MainPage
        key={entry.id}
        entry={entry}
     />
  )
})
const CityElements = dataCities.map((entry)=> {

  return (
     <MainPage
        key={entry.id}
       entry={entry}
     />
  )
})
    


  return (
    <>
       <Header />
         <h2 className="heading">Mountains</h2>
          {MountainElements}
         <h2 className="heading">Beaches</h2>
         {BeachElements}
         <h2 className="heading">Deserts</h2>
         {DesertElements}
         <h2 className="heading">Forests</h2>
        {ForestElements}
         <h2 className="heading">Cities</h2>
         {CityElements}
       <Footer />   
   </> 
       
  
  )
    
}
 
export default App;