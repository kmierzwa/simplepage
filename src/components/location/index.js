import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10245.846064916757!2d19.934636825864825!3d50.0589179239547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b120455da67%3A0xc3c7f5071b750d33!2zUnluZWsgR8WCw7N3bnk!5e0!3m2!1spl!2spl!4v1543320921062" 
                width="100%" 
                height="500px" 
                frameBorder="0"
                allowFullScreen
            ></iframe>
            
            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    );
};

export default Location;