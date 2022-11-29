import React from "react"
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function NewShop() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form className="form" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      
      <input {...register("Shop Name", { required: true })} placeholder="Shop Name" />
     
      <select {...register("Area", { required: true })}>
        <option value="">Area...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
  
      
      <select {...register("Category", { required: true })}>
          <option value="">Category...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <label>Opening Date</label>    
      <input type="date"></input>
      <label>Closing Date</label>  
      <input type="date"></input>
      <input type="submit" value="Add"/>
    </form>
  );
}
