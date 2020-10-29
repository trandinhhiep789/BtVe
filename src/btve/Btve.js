import React, { Component } from 'react'

import './BaiTapBookingTicket.css'
import DanhSachGheDaChon from './DanhSachGheDaChon'
import DanhSachGheNgoi from './danhSachGhe.json'
import HangGhe from './HangGhe'



export default class Btve extends Component {

    renderCaiSo = () => {
        return DanhSachGheNgoi.map((ghe, i) => {
            return ghe.hang === '' ? ghe.danhSachGhe.map((ghephu, l) => {
                return <div className="text-warning d-inline m-4 " style={{ fontSize: 25 }}>
                    {ghephu.soGhe}
                </div>
            }) : ''
        })
    }

    renderDanhSachGhe = () => {
        return DanhSachGheNgoi.map((ghe, i) => {

            return <div key={i} >
                <HangGhe hang={ghe} />
            </div>
        })
    }

    render() {
        return (
            <div className="bookingMovie"
                style={{
                    backgroundImage: 'url(./img/bgmovie.jpg)',
                    width: '100%',
                    height: '100%',
                    position: 'fixed', top: 0, left: 0,
                    backgroundSize: 'cover',

                }}>
                <div style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.7)'
                }}></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <h2 className="text-warning">Đặt vé xem phim</h2>
                            <h4 className="text-white">Màn hình</h4>
                            <img src="./img/Untitled.png" />
                            <div className="pr-5">
                                {this.renderCaiSo()}
                            </div>
                            {this.renderDanhSachGhe()}
                        </div>
                        <div className="col-4">
                            <h2 className='text-white'>Danh sách ghế bạn chọn</h2>
                            <DanhSachGheDaChon />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
