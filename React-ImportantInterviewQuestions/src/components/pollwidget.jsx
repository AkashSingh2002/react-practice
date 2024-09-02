import React, { useState } from 'react';

function PollWidget() {
    const [pollData, setPollData] = useState([
        { name: 'India', value: 70 },
        { name: 'Brazil', value: 20 },
        { name: 'USA', value: 10 }
    ]); // out of 100

    const [pollData2, setPollData2] = useState([
        { name: 'India', value: 70 },
        { name: 'Brazil', value: 20 },
        { name: 'USA', value: 10 }
    ]); 

    const [clickedItem, setClickedItem] = useState(null);

    const handleClick = (item) => {
        if (clickedItem?.name === item.name) {
            // If the same item is clicked again, do nothing
            return;
        }

        let newPollData = pollData2.map((e) => ({ ...e })); // Deep copy of pollData

        // Increase the value of the clicked item
        newPollData = newPollData.map((e) =>
            e.name === item.name ? { ...e, value: e.value + 10 } : e
        );

        // Adjust the values of the other items
        const adjustmentValue = clickedItem ? 10 : 0; // Adjust by 10 if an item was previously clicked
        const remainingItems = newPollData.filter((e) => e.name !== item.name);
        const adjustmentPerItem = adjustmentValue / remainingItems.length;

        newPollData = newPollData.map((e) =>
            e.name !== item.name ? { ...e, value: e.value - adjustmentPerItem } : e
        );

        setPollData(newPollData);
        setClickedItem(item);
    };

    return (
        <>
            <div className="container poll-container">
                <div
                    className="d-block"
                    style={{ width: '100%', background: 'black', color: 'white' }}
                >
                    {pollData?.map((item) => (
                        <div
                            key={item.name}
                            onClick={() => handleClick(item)}
                            style={{ width: `${item.value}%`, cursor: 'pointer' }}
                            className={`${clickedItem?.name === item.name ? 'bg-danger' : 'bg-primary'} poll-div mt-1`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PollWidget;
