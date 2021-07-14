import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'

interface CircularBadgeProps {
    src: string
    backgroundColor: string
    tooltip: string
    alt?: string
}

const CircularBadge = ({
    src,
    alt,
    backgroundColor,
    tooltip
}: CircularBadgeProps) => {
    return (
        <Tooltip title={tooltip} arrow>
            <div className={`inline-flex items-center p-2 border border-transparent rounded-full shadow-md ${backgroundColor}`}>
                <img className='h-6 w-6' src={src} alt={alt} />
            </div>
        </Tooltip>
    )
}

export default CircularBadge
