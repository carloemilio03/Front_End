
async function loadContacts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contactos`,{
    method: "GET",
    headers:{
      "Content-Type": "application/jason"
    }
  })
  const list = await res.json();
  return list;
  
}

async function Table() {

  const list = await loadContacts();
  console.log(list.data);
  return(
    <div>
      { list.data.map( (item) => 
      <div className="bg-red-200 m-4">{item.nombre} - {item.numero}</div>
      ) }
      
    </div>
  )
}

export default Table