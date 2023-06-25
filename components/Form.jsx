import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submit, handleSubmit }) => {
  return (
    <section className="w-full max-w-full  flex-start flex-col">
      <h1 className="text-left head_text">
        <span className="red_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and explore amazing evoke with world and experience this god
        level AI tool...
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex
         flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Experience AI
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your context here!!"
            className="form_textarea font-semibold"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tags {` `}
            <span className="font-normal font-semibold">
              #web #Nextjs #Nodejs #Blockchain
            </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            className="form_input font-semibold"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/"
           className="text-gray-600 text-sm hover:text-gray-800"
          >Cancel</Link>

          <button
            type="submit"
            disabled = {submit}
            className="font-semibold px-5 py-1.5
            text-white bg-red-600 rounded-full 
            hover:bg-yellow-600"
          >
            {submit ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
