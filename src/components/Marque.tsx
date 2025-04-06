import React, { useEffect } from 'react'
import Marquee from "react-fast-marquee";
import '../css/marque.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from '../redux/currencySlice';
import { AppDispatch, RootState } from '../redux/store';
import { FaMoneyBillTrendUp } from "react-icons/fa6";

function Marque() {

    const dispatch: AppDispatch = useDispatch();
    const { currencyData, loading, error } = useSelector((state: RootState) => state.currency);

    useEffect(() => {
        dispatch(getCurrency());
    }, []);

    return (
        <div className="marquee-container">
            <Marquee gradient={false} speed={100} className="marq">
                <span className="marquee-item">Dolar:  {(1 / currencyData.USD).toFixed(2)} ₺</span>
                <span className="marquee-item"><FaMoneyBillTrendUp /></span>
                <span className="marquee-item">Euro: {(1 / currencyData?.EUR).toFixed(2)} ₺</span>
                <span className="marquee-item"><FaMoneyBillTrendUp /></span>
                <span className="marquee-item">Sterlin: {(1 / currencyData?.GBP).toFixed(2)} ₺</span>
                <span className="marquee-item"><FaMoneyBillTrendUp /></span>
                <span className="marquee-item">İsviçre Frangı: {(1 / currencyData?.CHF).toFixed(2)} ₺</span>
                <span className="marquee-item"><FaMoneyBillTrendUp /></span>
                <span className="marquee-item">Rus Rublesi: {(1 / currencyData?.RUB).toFixed(2)} ₺</span>
                <span className="marquee-item"><FaMoneyBillTrendUp /></span>
                <span className="marquee-item">Japon Yeni: {(1 / currencyData?.JPY).toFixed(2)} ₺</span>
                <span className="marquee-item"><FaMoneyBillTrendUp /></span>
                <span className="marquee-item">Kanada Doları: {(1 / currencyData?.CAD).toFixed(2)} ₺</span>
                <span className="marquee-item"><FaMoneyBillTrendUp /></span>

            </Marquee>
        </div>
    )
}

export default Marque