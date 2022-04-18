import { useState, useEffect, useReducer, useMemo, useContext } from 'react';
import { User } from '../User';
import { ThemeContext } from '../Theme';
import { ThemeButton } from '../ThemeButton';

export const ToDo = () => {

    const [toDo, setToDo] = useState([]);
    const [userId, setUserId] = useState(null);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then((json) => {
                setToDo(json)
                dispatch({ type: 'all' })
            });
    }, []);

    function reducer(state, action) {
        switch (action.type) {
            case 'all':
                return toDo;
            case 'to-do':
                return toDo.filter((item) => !item.completed);
            case 'done':
                return toDo.filter((item) => item.completed);
            default:
                throw new Error();
        }
    }

    const [filter, dispatch] = useReducer(reducer, []);

    const count = useMemo(
        () => filter.length,
        [filter],
    );


    return (<>
        <div className='control-btn'>
            <ThemeButton onClick={() => dispatch({ type: 'done' })} text={"Show Done"}>Show Done</ThemeButton>
            <ThemeButton onClick={() => dispatch({ type: 'to-do' })} text={"Show To do"}>Show To do</ThemeButton>
            <ThemeButton onClick={() => dispatch({ type: 'all' })} text={"Show All"}>Show All</ThemeButton>
        </div>
        <p>Count of todos {count}</p>
        <div className='container'>
            <ul>
                {filter.map((post) => {
                    return (
                        <li
                            className='list'
                            key={post.id}
                        >
                            {post.title}
                            <ThemeButton onClick={() => { setUserId(post.userId); }} text={"Info About User"}>Info About User</ThemeButton>
                        </li>
                    )
                })}
            </ul>
            {userId === null ? "" : (<User userId={userId} />)}
        </div>
    </>
    )
}
