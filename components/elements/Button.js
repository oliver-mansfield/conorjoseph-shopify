const Button = ({ text, onClick }) => {

  return (
    <button className="relative h-10 w-64 group overflow-hidden rounded-md" onClick={onClick}>
      <div className="absolute bg-gold px-8 py-2 top-0 h-10 w-64 group-hover:top-[-100%] transition-all">{text}</div>
      <div className="absolute bg-white px-8 py-2 top-[100%] h-10 w-64 group-hover:top-0 transition-all">{text}</div>
    </button>
  );
}


export default Button;