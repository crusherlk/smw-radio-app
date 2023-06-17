export const Footer = () => {
  return (
    <footer className="h-24 bg-cDarkGray flex items-center justify-center">
      <p className="font-semibold">
        Developed By{" "}
        <a
          className="underline hover:text-red-500"
          href="https://crusherlk.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crusherlk ✌
        </a>{" "}
        - &copy; 2023
      </p>
    </footer>
  );
};
