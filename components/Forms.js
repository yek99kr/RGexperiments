import React from "react";

const Form = () => {
  return (
    <div className="p-10">
      <div>
        <p>button</p>
        <button className="text-sm">Link to the Works</button>
      </div>

      <div>
        <p> checkbox</p>
        <form>
          <label htmlFor="name">Name</label>
          <input type="checkbox" autoComplete="name" required />
        </form>
        <form>
          <label htmlFor="name">Name</label>
          <input type="checkbox" autoComplete="name" required />
        </form>
        <label htmlFor="name">Name</label>
        <input type="checkbox" autoComplete="name" required />
      </div>

      <div>
        <p> checkbox</p>
        <form>
          <label htmlFor="name">Name</label>
          <input type="radio" autoComplete="name" required />
        </form>
        <form>
          <label htmlFor="name">Name</label>
          <input type="radio" autoComplete="name" required />
        </form>
        <label htmlFor="name">Name</label>
        <input type="radio" autoComplete="name" required />
      </div>

      <div>
        <details>
          <summary>Epcot Center</summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>
      </div>

      <input className="block" type="range" autoComplete="name" required />

      <input className="block" type="number" autoComplete="name" required />

      <input className="block" type="time" autoComplete="name" required />

      <input className="block" type="color" autoComplete="name" required />

      <input className="block" type="hidden" autoComplete="name" required />
    </div>
  );
};

export default Form;
