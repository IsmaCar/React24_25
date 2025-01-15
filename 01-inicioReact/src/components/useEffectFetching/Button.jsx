
export const Button = (props) => {
    const {className, onClick} = props;
  return (
    <button className={className} onClick={onClick}>
        {props.children}
    </button>
  )
}
