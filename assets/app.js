

let form = document.querySelector('form');
//console.log(form);
let list = document.querySelector("ul");
let url ="../todo/api/data";
fetch(url).then(response=>response.json()).then(items=>{
    for(let item of items){
        let li = document.createElement("li");
        li.textContent=item.task;
        li.addEventListener("click",deleteitem);
        list.appendChild(li);
    }
    
});
function deleteitem(event){
  let li = event.srcElement;
  let item =  li.textContent;
  let removeItem = item;
  item = item.replace(/ /g,"-");
  console.log(item);
  let url = "../todo/"+item;
  fetch(url,{
      method:'delete'
  }).then(response=>response.text()).then(response=>{
console.log(response);
let items = list.querySelectorAll("li");

for(let val of items )
{
    if(val.textContent===removeItem)
    val.remove();
}
  });
  
    
  }
  form.addEventListener("submit",event=>{
      event.preventDefault();
      let input = form.querySelector("#todoItem");
      let item = {
          task:input.value
      }
     item = JSON.stringify(item);

      let url = "../todo";
      fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body:item
      }).then(response=>{
          let li = document.createElement("li");
          li.textContent = input.value;
          li.addEventListener("click",deleteitem);
          list.appendChild(li);
          input.value="";
      })
      
  })




