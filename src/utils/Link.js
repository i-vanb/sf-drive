import React from "react";
import NextLink from 'next/link'

export const Link = (props) => {
    return(
        <NextLink href={props.to}>
            <a className={props.className}>
                {
                    props.children
                }
            </a>
        </NextLink>
    )
}
