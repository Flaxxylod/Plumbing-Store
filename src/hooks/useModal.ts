import { useState } from "react";

const useModal = <T>() => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [select, setSelect] = useState<T | null>(null);

    const open = (item: T): void => {
        setSelect(item);
        console.log(item)
        setIsOpen(true);

    };
    const close = (): void => {
        setIsOpen(false);
        setSelect(null);
    };

    return (
        { isOpen, select, open, close }
    );
}

export default useModal;