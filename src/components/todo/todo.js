export default function Todo({ title, description, date}) {
    return (
        <div className="border-indigo-400 border-2 border-solid rounded min-w-[60%] my-2 p-2">
            <p className="text-xl capitalize font-bold">{ title }</p>
            <p>{ description }</p>
            <p>{ date }</p>
        </div>
    )
}