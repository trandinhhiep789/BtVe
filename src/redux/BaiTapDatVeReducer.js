const stateDefault = {
    //
    danhSachGheDat: [
        { soGhe: "A1", gia: 1000 },
        { soGhe: "C5", gia: 1000 }
    ],
}

const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe)
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1)
            } else {
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            state.danhSachGheDat = danhSachGheDangDatUpdate
            return { ...state }
        }
        case 'HUY_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe)
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1)
            }
            state.danhSachGheDat = danhSachGheDangDatUpdate
            return { ...state }
        }
        default: return { ...state }
    }
}

export default BaiTapDatVeReducer