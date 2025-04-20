
import * as React from "react";
import { Button as BootstrapButton, ButtonProps as BsButtonProps } from "react-bootstrap";

export interface ButtonProps extends BsButtonProps {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size, asChild = false, ...props }, ref) => {
    const Component = asChild ? ('button' as any) : BootstrapButton;
    
    return (
      <Component
        className={className}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
