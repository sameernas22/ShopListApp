import React from "react";
import {useDispatch} from "react-redux";
import {addData} from "../actions/action";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewShop() {
  const { register, handleSubmit,reset, formState: {errors} } = useForm();
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [areaisRequire, setareaIsRequire] = useState(false);
  const [catisRequire, setcatIsRequire] = useState(false);
  var area = ""
  var category = ""
  function closedate(e){
    document.getElementById("cdl").style.display = "flex";
    
    document.getElementById("cd").style.display = "block";
    document.getElementById("cd").min = e.target.value;
    document.getElementById("cdp").style.display = "flex";
  }
  function hidclosedate(){
    document.getElementById("cdl").style.display = "none";
    
    document.getElementById("cd").style.display = "none";
    document.getElementById("cdp").style.display = "none";
  }
  const hidForm = () =>{
    document.getElementById("form").style.display = "none";
    document.getElementById("addnew").style.display = "block";
  }
 const showForm = () =>{
  document.getElementById("form").style.display = "block";
  document.getElementById("addnew").style.display = "none";
 }
 const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${year}-${month}-${day}`;
 const getstatus = (data) =>{
  if(data['opendate'] <= currentDate && data['closedate'] >= currentDate  ){
    return "Open";
  }else{
    return "Close";
  }
 }
  return (
    <>
    <div id="addnew" onClick={showForm} >Add New Shop</div>
    <form id="form" className="form" onSubmit={handleSubmit((data) => {
        setData(JSON.stringify(data))
        if(data['Area'] === "Other"){
          area.push(data["OtherArea"])
          data['Area'] = data["OtherArea"]
        }else{
          area.push(data["Area"])
        }
        if(data['Category'] === "Other"){
          category.push(data["othercat"])
          data['Category'] = data['othercat']
        }else{
          category.push(data["Category"])
        }
        data['Status'] = getstatus(data);
        dispatch(addData(data,area,category));
        reset()
        hidclosedate()
        hidForm()

    } )}>
      
      <input {...register("ShopName", { required: true})} pattern="[A-Za-z ]+" placeholder="Shop Name (Aphabets ONLY)" />
      {errors.ShopName && <p>Please enter shop name</p>}
      <select {...register("Area", { required: true })} onChange={(e) =>{
        if(e.target.value === 'Other'){
          document.getElementById("otherarea").style.display = 'block';
          setareaIsRequire(true);

        }else{
          document.getElementById("otherarea").style.display = 'none';
          setareaIsRequire(false);
        }
      }}>
        <option value="">Area...</option>
        <option value="Thane">Thane</option>
        <option value="Pune">Pune</option>
        <option value="Mumbai Suburban">Mumbai Suburban</option>
        <option value="Nashik">Nashik</option>
        <option value="Nagpur">Nagpur</option>
        <option value="Ahmednagar">Ahmednagar</option>
        <option value="Solapur">Solapur</option>
        <option value="Other">Other</option>
      </select>
      {errors.Area && <p>Please select area</p>}
      <input id="otherarea" style={{display: "none"}} {...register("OtherArea", { required: areaisRequire})} pattern="[A-Za-z ]+" placeholder="Enter Area" />
      {errors.OtherArea && <p>Please enter area name</p>}
      <select {...register("Category", { required: true })} onChange={(e) =>{
        if(e.target.value === 'Other'){
          document.getElementById("othercat").style.display = 'block';
          setcatIsRequire(true);

        }else{
          document.getElementById("othercat").style.display = 'none';
          setcatIsRequire(false);
        }
      }}>
          <option value="">Category...</option>
          <option value="Grocery">Grocery</option>
          <option value="Butcher">Butcher</option>
          <option value="Baker">Baker</option>
          <option value="Chemist">Chemist</option>
          <option value="Stationery shop">Stationery shop</option>
          <option value="Other">Other</option>
        </select>
        {errors.Category && <p>Please select category</p>}
        <input id="othercat" style={{display: 'none'}} {...register("Othercat", { required: catisRequire})} pattern="[A-Za-z ]+" placeholder="Enter Category" />
        {errors.Othercat && <p>Please enter category name</p>}
        <label>Opening Date</label>    
      <input {...register("opendate", {validate : value => value !== ""})} type="date" onChange={closedate}></input>
      {errors.opendate && <p>Please select opening date</p>}
      <label id="cdl">Closing Date</label>  
      <input  {...register("closedate", {validate : value => value !== ""})} id="cd" type="date"></input>
      <div id="cdp">{errors.closedate && <p>Please select closing date</p>}</div>
      <input type="submit" value="Add"/>
      <input type='button' value="Cancel" onClick={hidForm}/>
    </form>
    </>
  );
}
