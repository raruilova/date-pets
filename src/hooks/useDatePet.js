import { useState } from "react";

const useDatePet = () => {
    const [datePes, setDatePets] = useState([]);
    const [editDate, setEditDate] = useState({});

    const saveDate = (pet) => {
        setDatePets([...datePes, pet]);
    }

    const editDatePet = (pet) => {
        const newDatePet = datePes.map(item => item.id === editDate.id ? pet : item);
        setDatePets(newDatePet);
    }

    const deleteDatePet = (id) => {
        const deletPet = datePes.filter(item => item.id !== id);
        setDatePets(deletPet);
    }

    return {
        datePes,
        saveDate,
        editDate, 
        setEditDate,
        editDatePet,
        deleteDatePet
    }
}

export default useDatePet;