import React, {FC} from 'react';
import Card, {ButtonVariant} from "./Card";
import EventsExample from "./EventsExample";

const OtherPage:FC = () => {
    return (
        <div>
            <Card width='100px' height='100px' border='1px solid red' onClick={text => console.log(text)} variant={ButtonVariant.outlined}>
                <button>Click</button>
            </Card>

            <EventsExample/>
        </div>
    );
};


export default OtherPage;