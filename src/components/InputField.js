export default function InputField({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  type = 'text', 
  rows = 1, 
  readOnly = false,
  className = '',
  helperText = '',
  icon = null
}) {
  const baseClasses = "w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/30 text-white placeholder-slate-400 transition-all duration-300";
  const inputClasses = `${baseClasses} ${className}`;
  
  if (rows > 1) {
    return (
      <div>
        {label && (
          <label className="block text-sm font-medium text-slate-200 mb-2 flex items-center space-x-2">
            {icon && <span className="text-purple-400">{icon}</span>}
            <span>{label}</span>
          </label>
        )}
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          readOnly={readOnly}
          className={inputClasses}
        />
        {helperText && (
          <p className="text-xs text-slate-400 mt-2">{helperText}</p>
        )}
      </div>
    );
  }
  
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-slate-200 mb-2 flex items-center space-x-2">
          {icon && <span className="text-purple-400">{icon}</span>}
          <span>{label}</span>
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className={inputClasses}
      />
      {helperText && (
        <p className="text-xs text-slate-400 mt-2">{helperText}</p>
      )}
    </div>
  );
} 