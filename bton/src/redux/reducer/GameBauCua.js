import { TANG_CUOC, GIAM_CUOC, CHOI_GAME } from "../constants/GameBauCua";

const mangXucXac = [
    { ma: 'bau', hinhAnh: 'img/bau.png',},
    { ma: 'cua', hinhAnh: 'img/cua.png',},
    { ma: 'tom', hinhAnh: 'img/tom.png',},
    { ma: 'ca', hinhAnh: 'img/ca.png',},
    { ma: 'nai', hinhAnh: 'img/nai.png',},
    { ma: 'ga', hinhAnh: 'img/ga.png',}
];

const initialValues = {
    tongTien: 100,
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: 'img/bau.png', diemCuoc: 0, },
        { ma: 'cua', hinhAnh: 'img/cua.png', diemCuoc: 0, },
        { ma: 'tom', hinhAnh: 'img/tom.png', diemCuoc: 0, },
        { ma: 'ca', hinhAnh: 'img/ca.png', diemCuoc: 0, },
        { ma: 'nai', hinhAnh: 'img/nai.png', diemCuoc: 0, },
        { ma: 'ga', hinhAnh: 'img/ga.png', diemCuoc: 0, }
    ],
    xucXac: [
        {ma: 'bau', hinhAnh: 'img/bau.png'},
        {ma: 'bau', hinhAnh: 'img/bau.png'},
        {ma: 'bau', hinhAnh: 'img/bau.png'},
    ]
};

const gameBauCuaReducer = (state = initialValues, action) => {
    switch (action.type) {
        case TANG_CUOC:
            {
                const danhSachCuoc = [...state.danhSachCuoc];
                const index = danhSachCuoc.findIndex(item => item.ma === action.data);
                if (index !== -1) {
                    if (state.tongTien > 0) {
                        state.tongTien -= 10;
                        danhSachCuoc[index].diemCuoc += 10;
                    }
                }
                return {...state, danhSachCuoc};
            }
        case GIAM_CUOC:
            {
                const danhSachCuoc = [...state.danhSachCuoc];
                const index = danhSachCuoc.findIndex(item => item.ma === action.data);
                if (index !== -1){
                    if(danhSachCuoc[index].diemCuoc > 0){
                        state.tongTien += 10;
                        danhSachCuoc[index].diemCuoc -= 10;
                    }
                }
                return {...state, danhSachCuoc};
            }
        case CHOI_GAME:
            {
                let xucXac = [];
                for (let i = 1; i <= 3; i++)
                {       // Min: 0, Max: 5
                    const random = Math.floor(Math.random() * (5 - 0 + 1) ) + 0;
                    xucXac.push(mangXucXac[random]);
                }
                const danhSachDatCuoc = state.danhSachCuoc.filter(
                    item => item.diemCuoc > 0
                );
                // Xử lý trả lại tiền đặt cược
                for (let item of danhSachDatCuoc){
                    const xucXacTimThay = xucXac.find(xucXac => xucXac.ma === item.ma);
                    if (xucXacTimThay){
                        state.tongTien += item.diemCuoc;
                    }
                }
                // Xử lý trả tiền thắng cược
                for (let item of xucXac){
                    const cuoc = danhSachDatCuoc.find(cuoc => cuoc.ma === item.ma);
                    if(cuoc){
                        state.tongTien += cuoc.diemCuoc;
                    }
                }

                // Reset lại điểm cược
                const danhSachCuoc = state.danhSachCuoc.map(item => ({
                    ...item,
                    diemCuoc: 0
                }));
                return {...state, xucXac, danhSachCuoc};
            }
        default:
            return state;
    }
}

export default gameBauCuaReducer;