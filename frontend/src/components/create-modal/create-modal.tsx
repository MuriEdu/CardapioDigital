import {useState} from 'react'
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interfaces/FoodData';
import "./modal.css"

interface InputProps {
    label : string,
    value : string | number,
    updateValue(value: any) : void
}
const Input = ({label, value, updateValue } : InputProps) =>{
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

interface CreateModalProps {
    handleOpenModal() : void
}

export default function CreateModal({handleOpenModal} : CreateModalProps){

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData);
        handleOpenModal();
    }

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Adicionar um novo item ao cardápio</h2>
                <form className="input-container">
                    <Input label="Title" value={title} updateValue={setTitle}/>
                    <Input label="Price" value={price} updateValue={setPrice}/>
                    <Input label="Image" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">Adicionar</button>
            </div>

        </div>
    )
}