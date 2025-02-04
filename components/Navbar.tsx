const Navbar = () => {
  return (
    <div className="flex flex-row items-center w-full sm:py-5 py-3 bg-slate-100">
      <h1 className="sm:w-1/4 w-2/3 text-2xl font-extrabold text-center">UTNTracker</h1>
      <p className="w-3/4 text-center font-semibold">
        Lleva al dia el control de tu estado academico
      </p>
    </div>
  );
};

export default Navbar;
