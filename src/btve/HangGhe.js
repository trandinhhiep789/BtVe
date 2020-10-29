import React, { Component } from 'react'
import { connect } from 'react-redux'

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hang.hang !== '' ?
            this.props.hang.danhSachGhe.map((ghe, i) => {

                let cssGheDaDat = ''
                let disabled = false

                //ghế đã đặt rồi
                if (ghe.daDat) {
                    cssGheDaDat = "gheDuocChon"
                    disabled = true
                }

                //ghế đang đặt
                let cssGheDangDat = ''
                let indexGheDangDat = this.props.danhSachGheDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
                if (indexGheDangDat !== -1) {
                    cssGheDangDat = "gheDangChon"
                }

                return <button onClick={() => {
                    this.props.datGhe(ghe)
                }} disabled={disabled} key={i}
                    className={` ghe ${cssGheDaDat} ${cssGheDangDat}`}>
                    {i + 1}
                </button>
            }) : ''
    }

    render() {
        return (
            <div>
                <div className="text-warning d-flex text-left mt-3 ml-5">
                    {this.props.hang.hang}
                    {this.renderGhe()}
                </div>
            </div>
        )
    }
}

const mapStateToProp = state => {
    return {
        danhSachGheDat: state.BaiTapDatVeReducer.danhSachGheDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch({
                type: 'DAT_GHE',
                ghe
            })
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(HangGhe)
