export default function Todo({ description, date }) {
  return (
      <tr>
          <td className="pr-6 py-4 whitespace-nowrap">{description}</td>
          <td className="pr-6 py-4 whitespace-nowrap">{date}</td>
          <td>
            <a
              href="javascript:void()"
              className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg"
            >
              Manage
            </a>
          </td>
      </tr>
  );
}
