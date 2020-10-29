import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachGheDaChon extends Component {
    render() {
        return (
            <div className="text-left">
                <div className="mt-5">
                    <button className="gheDuocChon "></button><span style={{ fontSize: 25 }} className="text-white">Ghế đã đặt</span> <br />
                    <button className="gheDangChon "></button><span style={{ fontSize: 25 }} className="text-white">Ghế đang chọn</span> <br />
                    <button className="ghe ml-1"></button><span style={{ fontSize: 25 }} className="text-white">Ghế chưa đặt</span> <br />
                </div>
                <table className="table text-white mt-5" border="2">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.danhSachGheDangDat.map((gheDangDat, i) => {
                            return <tr className="text-warning" key={i}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia}</td>
                                <td><button className="btn btn-danger"
                                    onClick={() => {
                                        this.props.dispatch({
                                            type: 'HUY_GHE',
                                            soGhe: gheDangDat.soGhe
                                        })
                                    }}>Hủy</button></td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>Tổng tiền</td>
                            <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, i) => {
                                return tongTien += gheDangDat.gia
                            }, 0).toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProp = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDat
    }
}

export default connect(mapStateToProp)(DanhSachGheDaChon)