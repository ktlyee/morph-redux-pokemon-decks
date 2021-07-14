import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

interface IPage {
    pageNumber: number
    href: string
    currentPage: boolean
}

interface ITextStyle {
    textColor: string
    fontWeight?: string
    fontSize?: string
    hover?: string
}

interface PaginationProps {
    pages: IPage[]
    text: ITextStyle
    borderColor: string
    activePage: string
    prevButton: () => void
    nextButton: () => void
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const Pagination = ({
    pages,
    text={
        textColor: '',
        fontWeight: 'font-medium',
        fontSize: 'text-sm'
    },
    borderColor,
    activePage,
    prevButton,
    nextButton
}: PaginationProps) => {
    return (
        <nav className={`border-t ${borderColor} px-4 flex items-center justify-between sm:px-0`}>
            <div className='-mt-px w-0 flex flex-1'>
                <button
                    onClick={prevButton}
                    className={`border-t-2 border-transparent pt-4 pr-1 inline-flex items-center cursor-pointer ${text.fontSize} ${text.fontWeight} ${text.textColor} ${text.hover}`}
                >
                    <ChevronLeftIcon className={`mr-3 h-5 w-5 ${text.textColor} ${text.hover}`} aria-hidden='true' />
                    Previous
                </button>
            </div>
            <div className='hidden md:mt-px md:flex'>
                {
                    pages.map((page, index) => (
                        <a
                            key={index}
                            href={page.href}
                            className={classNames(
                                page.currentPage ? `${activePage}` : `${text.textColor} ${text.hover}`,
                                `border-transparent border-t-2 pt-4 px-4 inline-flex items-center ${text.fontSize} ${text.fontWeight}`
                            )}
                            aria-current={page.currentPage ? 'page' : undefined}
                        >
                            {page.pageNumber}
                        </a>
                    ))
                }
            </div>
            <div className='-mt-px w-0 flex flex-1 justify-end'>
                <button
                    onClick={nextButton}
                    className={`border-t-2 border-transparent pt-4 pl-1 inline-flex items-center cursor-pointer ${text.fontWeight} ${text.fontSize} ${text.textColor} ${text.hover}`}
                >
                    Next
                    <ChevronRightIcon className={`ml-3 h-5 w-5 ${text.textColor} ${text.hover}`} aria-hidden='true' />
                </button>
            </div>
        </nav>
    )
}

    

export default Pagination