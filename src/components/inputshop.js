import React from "react"
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function NewShop() {
  const { register, handleSubmit,reset, formState: {errors} } = useForm();
  const [data, setData] = useState("");
  const area = [
    {value: 'thane', label: 'Thane'},
    {value: 'pune', label: 'Pune'},
    {value: 'mumbai suburban', label: 'Mumbai Suburban'},
    {value: 'nasik', label: 'Nasik'},
    {value: 'nagpur', label: 'Nagpur'},
    {value: 'ahmednagar', label: 'Ahmednagar'},
    {value: 'solapur', label: 'Solapur'},
  ]
  function closedate(e){
    document.getElementById("cdl").style.display = "flex";
    
    document.getElementById("cd").style.display = "block";
    document.getElementById("cd").min = e.target.value;
    console.log(e.target.value)
    document.getElementById("cdp").style.display = "flex";
  }
 
  return (
    <form id="form" className="form" onSubmit={handleSubmit((data) => {
        setData(JSON.stringify(data))
        console.log(data)
        reset()
        

    } )}>
      
      <input {...register("ShopName", { required: true})} placeholder="Shop Name" />
      {errors.ShopName && <p>Please enter shop name</p>}
      <select {...register("Area", { required: true })}>
        <option value="">Area...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      {errors.Area && <p>Please select area</p>}
  
      
      <select {...register("Category", { required: true })}>
          <option value="">Category...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        {errors.Category && <p>Please enter shop name</p>}
        <label>Opening Date</label>    
      <input {...register("opendate", {validate : value => value !== ""})} type="date" onChange={closedate}></input>
      {errors.opendate && <p>Please select opening date</p>}
      <label id="cdl">Closing Date</label>  
      <input  {...register("closedate", {validate : value => value !== ""})} id="cd" type="date"></input>
      <div id="cdp">{errors.closedate && <p>Please select closing date</p>}</div>
      <input type="submit" value="Add"/>
      <input type='button' value="Cancel"/>
    </form>
  );
}
