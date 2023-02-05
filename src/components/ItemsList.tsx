import { useStore } from '../store/store'
import { product } from '../types';

function ItemsList() {

    const { myList, addOne, removeOne, removeItem, clearList } = useStore((state) => state)

    console.log(myList);

    const handleClearMyList = () => {
        if (confirm("This action will clean your cart. Are you sure?")) {
            clearList()
        }
    }

    const handleRemoveOne = (e: product) => {
        if (e.quantity > 1) {
            removeOne(e.id)
        } else {
            if (confirm(`Are you sure to remove ${e.name} from your cart`)) {
                removeItem(e.id)
            }
        }
    };

    return (
        <div>
            <h3 className="text-center fw-bold">My products list</h3>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button
                    className="btn btn-outline-danger"
                    onClick={handleClearMyList}
                    disabled={
                        myList.length > 0 ? false : true
                    }
                >
                    Clear my list
                </button>
                <hr />
                {
                    myList.length > 0
                        ? (
                            <ol className="list-group list-group-numbered">
                                {
                                    myList.map(
                                        e => (
                                            <li
                                                className="list-group-item d-flex justify-content-between align-items-start"
                                                key={e.id}>
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">{e.name}</div>
                                                    Quantity: {e.quantity}
                                                </div>
                                                <span>
                                                    <button
                                                        className="btn btn-success badge rounded-pill mx-1"
                                                        onClick={() => addOne(e.id)}>
                                                        +
                                                    </button>
                                                    <button
                                                        className="btn btn-danger badge rounded-pill mx-1"
                                                        onClick={() => handleRemoveOne(e)}>
                                                        {
                                                            e.quantity > 1 ? "-" : "Remove"
                                                        }
                                                    </button>
                                                </span>
                                            </li>
                                        )
                                    )
                                }
                            </ol>
                        )
                        : (<div className="alert alert-dark" role="alert">
                            Empty List
                        </div>)
                }
            </div>
        </div>
    )
}

export default ItemsList