import React from 'react';

// Base props common to both button and anchor
interface BaseProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
}

// Props specific to button
type ButtonElementProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

// Props specific to anchor
type AnchorElementProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

// Union type
type ButtonProps = ButtonElementProps | AnchorElementProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const { 
    children, 
    variant = 'primary', 
    fullWidth = false,
    className = '',
    ...rest 
  } = props;

  const baseStyle = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-luxury-gold disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-luxury-black bg-luxury-gold hover:bg-luxury-goldLight shadow-lg shadow-luxury-gold/20",
    secondary: "border-transparent text-white bg-luxury-charcoal hover:bg-luxury-gray",
    outline: "border-luxury-gold text-luxury-gold bg-transparent hover:bg-luxury-gold/10"
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyle} ${variants[variant]} ${widthStyle} ${className}`;

  if (props.href) {
    const { href, ...anchorProps } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={combinedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};