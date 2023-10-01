import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import List from "./List";

const data = [
    {
        id: 0,
        label: "Tall things",
        status: "unchecked",
        items: [
            {
                id: 1,
                label: "Buildings",
                status: "unchecked",
                items: [
                    {
                        id: 12,
                        label: "Andre 3",
                        status: "unchecked",
                        items: [],
                    },
                    {
                        id: 13,
                        label: "Paul Bunyan 3",
                        status: "unchecked",
                        items: [],
                    },
                ],
            },
            {
                id: 2,
                label: "Giants",
                status: "unchecked",
                items: [
                    {
                        id: 3,
                        label: "Andre",
                        status: "unchecked",
                        items: [],
                    },
                    {
                        id: 4,
                        label: "Paul Bunyan",
                        status: "unchecked",
                        items: [
                            {
                                id: 14,
                                label: "Smurfs 2",
                                status: "unchecked",
                                items: [],
                            },
                            {
                                id: 15,
                                label: "Mushrooms 2",
                                status: "unchecked",
                                items: [
                                    {
                                        id: 16,
                                        label: "One sandwich 2",
                                        status: "unchecked",
                                        items: [
                                            {
                                                id: 17,
                                                label: "Two sandwiches 2",
                                                status: "unchecked",
                                                items: [
                                                    {
                                                        id: 18,
                                                        label: "Andre 4",
                                                        status: "unchecked",
                                                        items: [],
                                                    },
                                                    {
                                                        id: 19,
                                                        label: "Paul Bunyan 4",
                                                        status: "unchecked",
                                                        items: [],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                label: "Two sandwiches",
                status: "unchecked",
                items: [
                    {
                        id: 10,
                        label: "Andre 2",
                        status: "unchecked",
                        items: [],
                    },
                    {
                        id: 11,
                        label: "Paul Bunyan 2",
                        status: "unchecked",
                        items: [],
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        label: "Short things",
        status: "unchecked",
        items: [
            {
                id: 7,
                label: "Smurfs",
                status: "unchecked",
                items: [],
            },
            {
                id: 8,
                label: "Mushrooms",
                status: "unchecked",
                items: [],
            },
            {
                id: 9,
                label: "One sandwich",
                status: "unchecked",
                items: [],
            },
        ],
    },
];

function App() {
    const [items, setItems] = useState(data);

    const setStatusForParent = (items) => {
        let sumChecked = 0;
        for (const item of items) {
            if (item.status === "checked") {
                sumChecked += 1;
            }
            if (item.items.length !== 0) {
                item.status = setStatusForParent(item.items);
            }
        }

        return sumChecked === items.length
            ? "checked"
            : sumChecked === 0
            ? "unchecked"
            : "indeterminate";
    };

    const changeStatus = (item) => {
        const setStatus = (item, neededStatus) => {
            item.status = neededStatus;

            for (const child of item.items) {
                setStatus(child, neededStatus);
            }
        };

        const neededStatus =
            item.status !== "unchecked" ? "unchecked" : "checked";

        setStatus(item, neededStatus);
        setStatusForParent(items);

        setItems([...items]);
    };

    return (
        <div className="App">
            <List items={items} changeStatus={changeStatus} />
            <span className="App-span">"GGG"</span>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default App;
