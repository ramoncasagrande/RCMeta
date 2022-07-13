import NotificationButton from '../notificationButton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import { useState } from 'react';

function SalesCard() {

    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());


    return (
        <div className="card">
            <h2 className="vendasTitulo">Vendas</h2>
            <div>
                <div className="form_container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="form"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="form_container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="form"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="tabela">

                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="show992">#292</td>
                            <td className="show576">12/06/2022</td>
                            <td>Josimara</td>
                            <td className="show992">29</td>
                            <td className="show992">25</td>
                            <td>R$55300,00</td>
                            <td>
                                <div className="botao-vermelho-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#284</td>
                            <td className="show576">02/04/2022</td>
                            <td>Ramon</td>
                            <td className="show992">38</td>
                            <td className="show992">32</td>
                            <td>R$67700,00</td>
                            <td>
                                <div className="botao-vermelho-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#286</td>
                            <td className="show576">25/08/2022</td>
                            <td>Mônica</td>
                            <td className="show992">34</td>
                            <td className="show992">29</td>
                            <td>R$57800,00</td>
                            <td>
                                <div className="botao-vermelho-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard;