

export default function Button(props) {

    if (props.type === "primary") {
        return (
            <button onClick={props.onClick} className={"flex w-full px-5 items-center justify-center h-14 bg-primary hover:bg-primary-dark text-white rounded-lg " + props.className}>
                {props.children}
            </button>
        )

    } else if (props.type === "secondary") {
        return (
            <button onClick={props.onClick} className={"flex w-full h-14 px-5 items-center bg-white hover:bg-zinc-100 border rounded-lg " + props.className}>
                {props.children}
            </button>
        )
    } else if(props.type === "icon"){
        return (
            <button onClick={props.onClick} className={"flex w-12 h-12 items-center justify-center bg-white hover:bg-zinc-100 border rounded-lg " + props.className}>
                {props.children}
            </button>
        )
    } else {
        return (
            <button onClick={props.onClick} className={"flex w-full h-14 px-5 items-center bg-zinc-700 text-white font-bold rounded-lg " + props.className}>
                {props.children}
            </button>
        )
    }


}