import Alert from '@mui/material/Alert';

const Alerta = ({severityAlert,messageAlert}) => {
    return (
        <>
            <Alert severity={severityAlert}>{messageAlert}</Alert>
        </>
    )
}

export default Alerta