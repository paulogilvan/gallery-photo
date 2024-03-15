import * as C from './styles';
import { Photo } from "../../types/Photo";

type Props = {
    photo: Photo;
    onClick: () => void;
}

export const PhotoItem = ({ photo, onClick }: Props) => {
    return (
        <C.Container onClick={onClick}>
            <img src={`/assets/${photo.url}`} alt="" />
        </C.Container>
    );
}