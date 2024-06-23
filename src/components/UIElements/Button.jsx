export default function Button({children, onClick, btnClass = "button", ...props}){
    return(
        <button className={btnClass} onClick={onClick}{...props}>{children}</button>
    )
}