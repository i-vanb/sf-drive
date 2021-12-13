import React from "react";

export const toImg = doc => {
    if(!doc) return <span className="no-photo"></span>

    return <img src={`data:${doc.mimetype};base64,${Buffer.from(doc.buffer).toString('base64')}`}/>
}
