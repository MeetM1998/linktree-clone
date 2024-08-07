import React, { useState } from "react";

const LinkForm = ({ addLink }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addLink({ title, url });
    setTitle("");
    setUrl("");
  };

  return (
    <div className="flex flex-col items-center justify-center space-x-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-white p-6 rounded shadow-md w-96 mx-auto mt-16"
      >
        <h3 className="text-xl font-bold mb-4">Add New Link</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Link Title"
          className="mb-2 p-2 border rounded w-full"
          required
        />
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Link URL"
          className="mb-2 p-2 border rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition duration-200"
        >
          Add Link
        </button>
      </form>
    </div>
  );
};

export default LinkForm;
