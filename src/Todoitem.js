function TodoItem({todo, onChange, onDelete}){
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.isCompleated} onChange={(e)=>{
                    onChange({
                        ...todo,
                        isCompleated: e.target.checked
                    });
                }}/>
                {todo.text}
                <button onClick={()=>{
                    onDelete(todo);
                }}>x</button>
            </label>
        </div>
    )
}

export default TodoItem;