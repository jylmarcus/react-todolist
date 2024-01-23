import Todo from "./todo"

export default function Todolist( todoList ) {

    return(
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Todos
                    </h3>
                </div>
                <div className="mt-3 md:mt-0">
                    <a
                        href="javascript:void(0)"
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >
                        Add Todo
                    </a>
                </div>
            </div>
            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-center">
                    <tbody className="text-gray-600 divide-y">
                        {
                            todoList.todoList.map((todo) => (
                                <Todo key={todo.id} description={todo.description} date={todo.date} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};
