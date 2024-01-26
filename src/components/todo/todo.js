export default function Todo({id, description, date, delTodo }) {
  return (
    <tr>
      <td className="pr-6 py-4 whitespace-nowrap">{description}</td>
      <td className="pr-6 py-4 whitespace-nowrap">{date}</td>
      <td>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={() => delTodo(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
