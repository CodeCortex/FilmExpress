import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-3xl text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <span>
        Film<span className="text-white">Express</span>
      </span>

      <Link to={"/addmovie"}>
        <h1 className="text-lg cursor-pointer flex items-center">
          <button>
            <AddIcon className="mr-1" color="secondary" />
            <span className="text-white">Add New</span>
          </button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
