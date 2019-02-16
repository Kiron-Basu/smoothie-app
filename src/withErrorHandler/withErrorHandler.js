import React, {Component}  from 'react';
import Modal from '../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error:null
        }
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => { //clears errors on requests so error handler isn't triggered
                this.setState({error:null});
                return req; //make sure request is actually retured, getting past intercept
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => { //listens for incoming error fomr Firebase on response
                this.setState({error:error}); //above res => res is short hand returning for same reasons as top intercept
            })
        }   

        componentWillUnmount() {
            // console.log('Will unmount', this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () => {
            this.setState({error:null}); //resets error status after user has closed modal (triggered from click event)
        }
        render() {
            return (
                <>
            <Modal show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}
            >
                {this.state.error ? this.state.error.message : null} 
            </Modal>
            <WrappedComponent {...this.props} />
                </>  
            )
        }
    }
}

export default withErrorHandler;