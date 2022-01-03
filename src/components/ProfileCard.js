import React from "react"
import Image from 'next/image'


function ProfileCard(props) {
    const {name, pro, img} = props
    return (
        <div className="team__cards_item">
            <Image className="team__cards_item_photo" src={img} alt="photo"/>
            <p className="team__cards_item_name">{name}</p>
            <p className="team__cards_item_pro">{pro}</p>
        </div>
    )
}

export default ProfileCard;
