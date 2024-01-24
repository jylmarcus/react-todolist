import { useEffect, useRef } from "react";

export default function NewTodo({ openModal, closeModal, children }) {
    const ref = useRef();

    useEffect(()=> {
        if(openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <dialog className="w-[50%] shadow-xl rounded-xl" ref={ref} onCancel={closeModal} >
            <div className="flex flex-col items-center justify-around w-full h-auto p-4 shadow-xl bg-primary-600 rounded-xl">
                <form>
                    <input type="text"></input>
                </form>
                <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg" onClick={closeModal}>Close</button>
            </div>
        </dialog>
    )
};
