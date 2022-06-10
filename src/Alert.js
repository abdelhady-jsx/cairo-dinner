import AlertUI, { AlertBody, AlertHeader, AlertWrapper } from './UI/Alert/Alert'

const Alert = ({ showAlert, title, text, alertUser }) => {
    const closeAlert = () => alertUser(false)
    return showAlert && (
        <AlertWrapper onClick={closeAlert}>
            <AlertUI>
                <AlertHeader>
                    <h2>
                        {title}
                    </h2>
                </AlertHeader>
                <AlertBody>
                    <p>
                        {text}
                    </p>
                    <p>
                        (Click anywhere to close this window.)
                    </p>
                </AlertBody>
            </AlertUI>
        </AlertWrapper>
    )
}

export default Alert