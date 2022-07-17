import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/icon-notification.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(id:number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("SMS Enviado com Sucesso!");
        });
}

function NotificationButton( {saleId} : Props) {
    return (
        <div className="botao-vermelho" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;