// tipizacija sobytij
import React, {FC, useRef, useState} from 'react';

const EventsExample:FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    //nie uprowlaemyj input
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Upravlaemyj input', value)
        console.log('Nie upravlaemyj input', inputRef.current?.value)
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
       console.log('DRAG')
    };

    //Drag drop
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDrag(true)
    };

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
        console.log('DROP')
    };

    return (
        <div>
            <hr/>
           <input ref={inputRef} type='text' placeholder='Nie upravlaemyj input'/>
           <input value={value} onChange={changeHandler} type='text' placeholder='Upravlaemyj input'/>
           <button onClick={clickHandler}>Preview</button>
            <hr/>
            <div onDrag={dragHandler} draggable style={{width: '200px', height: 200, background: 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: '200px', height: 200, background: isDrag? 'blue': 'red', marginTop: 10}}></div>
        </div>
    );
};

export default EventsExample;