import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    const templateParams = { email: email };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Thank you for subscribing!");
        setEmail("");
        setDisabled(false);
      })
      .catch(() => {
        toast.error("Subscription failed. Try again.");
        setDisabled(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4 flex-wrap">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <button
        type="submit"
        disabled={disabled}
        className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
      >
        Subscribe
      </button>
      <Toaster />
    </form>
  );
};

export default NewsletterForm;
