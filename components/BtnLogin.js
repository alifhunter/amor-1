export default function BtnLogin({ children }) {
  return (
    <button>
      <a className="border border-black rounded py-2 px-4 font-medium hidden lg:inline-block hover:text-softPurple hover:border-softPurple">
        {children}
      </a>
    </button>
  );
}
