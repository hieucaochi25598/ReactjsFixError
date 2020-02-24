import { TANG_CUOC, GIAM_CUOC, CHOI_GAME } from "../constants/GameBauCua"

export const tangCuocAction = (ma) => {
    return {
        type: TANG_CUOC,
        data: ma
    };
};

export const giamCuocAction = (ma) => {
    return {
        type: GIAM_CUOC,
        data: ma
    };
};

export const choiGameAction = () => {
    return {
        type: CHOI_GAME,
    }
}