import React from 'react'

interface IconLabelProps {
    icon: React.ReactElement
    title: string
    url: string
}

function IconLabel({ icon, title, url }: IconLabelProps) {
    return (
        <a className="flex items-center [&]:w-fit [&]:rounded-full" href={url}>
            {icon}
            <span>{title}</span>
        </a>
    )
}

export default IconLabel
