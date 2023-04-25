import axios from "axios";

export const axiosCancelable = (cb: any) => {
    let source:any;
    return (...args:any) => {
        if (source) {
            source.cancel();
        }
        source = axios.CancelToken.source();
        return cb({cancelToken: source.token}, ...args);
    }

};