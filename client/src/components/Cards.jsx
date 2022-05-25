import Card from "./Card.jsx";

const Cards = () => {

    //fetch members from servers database
    const members=["Fin","Allan","Haakim","Gerald","Uche","Egle","Andrija","Felix","Marco","Wais","Ann","Wojtek","Paul","Carlos","Vonn"];




  return (
    <div id="cards">
        {members.map((member,i)=><Card key={i} name={member}/>)}
    </div>
  )
}

export default Cards;