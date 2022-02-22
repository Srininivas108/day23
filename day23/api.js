function createCountry({createdAt,name,avatar,id}){
    const countries =document.createElement("div");
    countries.setAttribute("class","countries");

    countries.innerHTML= `<img  class="image" src="${avatar}" alt="avatar image">
    <div class="countryinf">
     
     
     <p> <span>CreateAt:</span> ${createdAt} </p>
      <p><span>name:</span> ${name}</p>
      <p><span>id:</span> ${id}</p>
   </div>`;
   document.body.append(countries);


}

fetch("https://6214833589fad53b1f15c894.mockapi.io/users")
.then((data)=>data.json())
.then((countries)=>{
    countries.forEach((country)=> {
        const newCountry ={
            createdAt: country.createdAt,
            avatar :country.avatar,
            name: country.name,
            id: country.id,
        };
        createCountry(newCountry)
    });
});
    
