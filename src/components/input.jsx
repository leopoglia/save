


export default function Input(props) {


    if (props.type === "checkbox") {
        return (
            <input
                onChange={(e) => props.onChange?.(e)}
                checked={props.checked}
                type="checkbox"
                id={props.id}
                className={"relative peer shrink-0 appearance-none w-5 h-5 border border-zinc-300 rounded-sm bg-white checked:bg-primary checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400 " + props.className}
            />
        );
    } else {
        return (
            <input onChange={(e) => props.onChange ? props.onChange(e) : null} type={props.type} value={props.value} placeholder={props.placeholder} className={"w-full h-12 border border-gray-300 p-2 px-4 outline-primary rounded-lg " + props.className} />
        )
    }


}