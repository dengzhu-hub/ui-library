import './Button.css'
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:'primary' | "secondary";
}
const Button:React.FC<ButtonProps> = ({variant, ...props}) => {
  const styles = () => {
    const propStyle = props.style ??{};
    if(props.disabled) return propStyle;
    if(variant === 'primary') return { borderColor: '#087f5b', backgroundColor: '#20c997', color: '#f03e3e', ...propStyle };
    if (variant==='secondary') return { borderColor: '#343a40', backgroundColor: '#adb5bd', color: '#fab005', ...propStyle };
    return propStyle;
  }
  return (
   <button style={styles()} {...props}>{props.children}</button>
  )
}

export default Button