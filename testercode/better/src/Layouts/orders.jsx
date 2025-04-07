import React from "react";
import { Link } from "react-router-dom";

function Orders() {
    return (
        <div>
            <h1>Orders by Status</h1>
            <div>
                <ul>
                    <li>
                        <h2>Ordered</h2>
                        <Link to="/status/O">View Orders</Link>
                    </li>
                    <li>
                        <h2>Processing</h2>
                        <Link to="/status/P">View Orders</Link>
                    </li>
                    <li>
                        <h2>Shipped</h2>
                        <Link to="/status/S">View Orders</Link>
                    </li>
                    <li>
                        <h2>Delivered</h2>
                        <Link to="/status/D">View Orders</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Orders;