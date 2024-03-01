import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mx-5 w-1/3 items-center self-center justify-center max-md:w-3/4 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white "></div>
      ) : (
        <>Send Message </>
      )}
    </button>
  );
}
