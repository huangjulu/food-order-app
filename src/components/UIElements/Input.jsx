export default function Input({label, id, ...props}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} name={id}{...props} required/>
        </> 
    )
}