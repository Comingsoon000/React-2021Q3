import React from "react";
import "./AppForm.css"

export const AppForm = (): JSX.Element => {
  return <form id="data">
    <label htmlFor="name">name</label>
    <input type="text" name="name" id="name"/>
    <div className="form__gender">
      <label htmlFor="male">male</label>
      <input type="radio" name="gender" id="male" value="male"/>
      <label htmlFor="female">female</label>
      <input type="radio" name="gender" id="female" value="female"/>
    </div>
    <label htmlFor="birthday">birthday</label>
    <input type="date" name="birthday" id="birthday"/>
    <select name="country" id="country" value="Country">
      <option value="country" disabled>Country</option>
      <option value="Russia">Russia</option>
      <option value="Belorus">Belorus</option>
      <option value="Ukraine">Ukraine</option>
    </select>
    <label htmlFor="notifications">receive notifications</label>
    <input type="checkbox" name="notifications" id="notifications"/>
    <input type="submit" value=""/>
  </form>
};

