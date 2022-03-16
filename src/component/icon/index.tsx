import React, { forwardRef } from "react";

export interface IconProps {
  children?: any
  color?: string;
  size?: number;
  className?: string;
  style?: any;
}


const Icon = forwardRef(function Button ({children, color, size, className, style, ...props}: IconProps, ref){

  return (
  <>
      <a style={{fontSize: size, color: color}}  className={`material-icons ${className}`}>{children}</a>
  </>

  )
});

export default Icon