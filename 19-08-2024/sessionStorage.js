const searchField=document.querySelector("#searchField")

searchField.addEventListener("input",(e)=>
{
    sessionStorage.setItem("searchField",e.target.value)
})


const populateSearch=()=>
    {
        const previosSearch=sessionStorage.getItem("searchField")
        searchField.value=previosSearch
    }
    
 populateSearch()   
