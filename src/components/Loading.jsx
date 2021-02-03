import React from 'react';

const Loading = () => {
    return ( 
    <div
    style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    }}>
        <div className="spinner-grow text-success" role="status">
        </div>
        <div class="spinner-border text-primary" role="status">
        </div>
        <div className="spinner-grow text-warning" role="status">
        </div>
        <div class="spinner-border text-info" role="status">
        </div>
        <div className="spinner-grow text-danger" role="status">
        </div>
    </div> 
    );
}

export default Loading;