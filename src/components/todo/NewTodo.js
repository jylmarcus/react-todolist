import { useEffect, useRef } from "react";

export default function NewTodo({ openModal, closeModal, handleAddTodo }) {
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
                <form onSubmit={handleAddTodo}>
                    <label htmlFor="todoDesc">Description: </label>
                    <input type="text" name="todoDesc"/>
                    <label htmlFor="todoDate">Date: </label>
                    <input type="date" name="todoDate"/>
                    <button className="px-5 py-3 text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200" onClick={closeModal}>Cancel</button>
                    <button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg" onClick={closeModal}>Submit</button>
                </form>
                
            </div>
        </dialog>
    )
};
