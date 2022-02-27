import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Search city ..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 shadow-none"
            />
          </div>
          <div className="col-1">
            <button className="location" title="Current location">
              <span role="img" aria-label="Current location">
                📍
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}