import * as C from './styles';

type Props = {
    image: string;
    closeModal: () => void;
}

export const Modal = ({ image, closeModal }: Props) => {
    return (
        <>
            <C.Container onClick={closeModal}>
                <img src={`/assets/${image}`} alt="" />
            </C.Container>
            <C.Close onClick={closeModal}>X</C.Close>
        </>
    );
}