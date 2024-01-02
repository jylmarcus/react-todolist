export default function Todo({ title, description, date}) {
    return (
        <div>
            <p>{ title }</p>
            <p>{ description }</p>
            <p>{ date }</p>
        </div>
    )
}