export default function Form() {
  return (
    <form className="form rounded-lg bg-white p-4 flex flex-col">
      <label htmlFor="name" className="text-sm text-gray-600 mx-4">
        {" "}
        Your Name
      </label>
      <input type="text" className="input" name="name" />
      <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
        Email
      </label>
      <input type="text" className="input" name="email" />
      <label htmlFor="message" className="text-sm text-gray-600 mx-4 mt-4">
        Message
      </label>
      <textarea
        rows="4"
        type="text"
        className="input"
        name="message"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
      >
        Send Message
      </button>
    </form>
  );
};
