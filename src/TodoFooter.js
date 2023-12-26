import "./TodoFooter.css";
function TodoFooter({todos, onClearCompleated}){

    const compleatedSize = todos.filter((todo)=>todo.isCompleated).length;
    return(
        <div>
            <span>{compleatedSize}/{todos.length} Compleated</span>
            <button onClick={onClearCompleated}>Clear  Compleated</button>
        </div>
    )
}

export default TodoFooter;