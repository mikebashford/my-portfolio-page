import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mx-5 w-1/2 self-center max-md:w-3/4"
      submit={" "}
    >
      Send Message
    </button>
  );
}
