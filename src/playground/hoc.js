import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>This is info: { props.info }</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share.</p>}
             <WrappedComponent { ...props } />
        </div>
    );
};

const withAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated 
                ? <WrappedComponent { ...props } /> 
                : <p>Please log in</p> 
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuth(Info);


ReactDOM.render(<AuthInfo isAuthenticated={false} info={'aaaaaa'}/>, document.getElementById('app'))