// const axios=require('axios');
async function insert(){
    var id=document.getElementById("id").value;
    var name=document.getElementById("name").value;
    var obj={
        "id":id,
        "name":name
    }
    if(id===""){
        alert("Enter a valid id");
        return;
    }
    var data=await axios.post("http://localhost:3000/users",obj);
}
async function Delete(id){
    // var id=document.getElementById("id").value;
    if(id===""){
        alert("Enter a valid id");
        return;
    }
    var data=await axios.delete(`http://localhost:3000/users/${id}`);
    //alert(`data with ${id} is deleted`);
}
async function update(){
     var id=document.getElementById("id").value;
     if(id===""){
        alert("Enter a valid id");
        return;
    }
     var obj={
        "name":document.getElementById("name").value
     }
     var data=await axios.patch(`http://localhost:3000/users/${id}`,obj);
}
async function display(){
    var s=`<table>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>operation</th>
    </tr>`;
    // s+=`<tr><td>${element.id}</td><td>${element.name}</td></tr>`
    var data=await axios.get("http://localhost:3000/users");
    console.log(data);
    data.data.forEach(element => {
        s+=`<tr><td>${element.id}</td><td>${element.name}</td><td><input type="button" value="delete" onclick="Delete(${element.id})"></td></tr>`
    });
    s+=`</table>`;
    document.getElementById("result").innerHTML=s;
}


{/* <input type="button" value="update" onclick="update(${element.id})"></input> */}