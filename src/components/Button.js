export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  disabled = false
}) {
  const baseClasses = "py-3 px-6 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";
  const variantClasses = {
    primary: "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600 hover:border-slate-500 transform hover:-translate-y-0.5",
    success: "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600 hover:border-slate-500 transform hover:-translate-y-0.5",
    secondary: "bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 transform hover:-translate-y-0.5",
    outline: "bg-transparent text-slate-300 border border-slate-600 hover:bg-slate-800 hover:border-slate-500 transform hover:-translate-y-0.5"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`;
  
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
} 