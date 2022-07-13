import icon from '../../assets/img/icon-notification.svg';

import './styles.css';

function NotificationButton() {
    return (
        <div className="botao-vermelho">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;