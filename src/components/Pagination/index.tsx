import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

interface IPage {
    pageNumber: number
    href: string
}

interface PaginationProps {
    pages: IPage[]
}

export const Pagination = ({
    pages
}: PaginationProps) => (
    <nav className='border-t border-gray-200 px-4 flex items-center justify-between sm:px-0'>
        <div className='-mt-px w-0 flex flex-1'>
            <a
                href='#'
                className='border-t border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300'
            >
                <ChevronLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                Previous
            </a>
        </div>
        <div className='hidden md:mt-px md:flex'>
            {
                pages.map((page) => (
                    <a
                        href={page.href}
                        className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
                    >
                        {page.pageNumber}
                    </a>
                ))
            }
        </div>
    </nav>
)

export default Pagination