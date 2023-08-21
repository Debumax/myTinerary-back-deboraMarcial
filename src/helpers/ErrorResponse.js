class ErrorResponse extends Error {
    constructor(mensaje, codigoStatus) {
        super(mensaje);
        this.codigoStatus = codigoStatus;
    }
}
export default ErrorResponse;