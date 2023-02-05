import { useStore } from '../store/store'
import { useForm, SubmitHandler } from 'react-hook-form'
import { product, productForm } from '../types/index'

function ItemsForm() {

    const { addItem } = useStore()

    const { register, handleSubmit, formState: { errors }, reset } = useForm<productForm>({
        defaultValues: {
            name: "",
            quantity: 1
        }
    });

    const onSubmit: SubmitHandler<productForm> = (data) => {
        const { name, quantity } = data
        const newItem: product = {
            id: Date.now().toString(),
            name,
            quantity
        };
        addItem(newItem);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-grid gap-2 col-6 mx-auto">
                <div className="form-floating">
                    <input type="text"
                        className="form-control"
                        id="productId"
                        placeholder="Add a product name"
                        {...register("name", {
                            required: true,
                            minLength: 3
                        })}
                    />
                    <label htmlFor="productId">Product name</label>
                </div>
                <div className="form-floating">
                    <input type="number"
                        className="form-control"
                        id="quantityId"
                        min={1}
                        {...register("quantity", {
                            required: true,
                            valueAsNumber: true,
                            min: 1
                        })}
                    />
                    <label htmlFor="quantityId">Quantity</label>
                </div>
                <button
                    className="btn btn-outline-primary"
                    type="submit">
                    Add Product
                </button>
            </div>
        </form>
    )
}

export default ItemsForm