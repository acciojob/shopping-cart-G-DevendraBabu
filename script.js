//your code here
let name1=document.getElementById("name");
let price=document.getElementById("price");
let add_btn=document.getElementById("add");

let table1=document.createElement("table");
let body1=document.getElementById("body")

let total_price=0;

let t_price= document.getElementById("total");
add_btn.addEventListener("click",(e)=>{

    console.log("hi");

    if(name1.value !="" && price.value!="")
    {
        total_price=total_price + Number(price.value);
        t_price.innerText="TOTAL = " + total_price;
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        td1.innerText=name1.value;
        td2.innerText=price.value;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table1.appendChild(tr);
        body1.appendChild(table1);
        name1.value="";
        price.value="";
        
    }
    else
    {
        console.log("check the input fields")
    }
    // t_price.innerText="TOTAL = " + total_price;

})


