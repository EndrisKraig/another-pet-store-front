import React from "react";
import { usePagination } from "../hook/usePagination";
import './Pagination.scss'
import classnames from 'classnames';

const DOTS = '...';

export default function Pagination(props) {

    const {
        onPageChange,
        totalPageCount,
        siblingCount = 13,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        totalPageCount,
        pageSize,
        siblingCount,
        currentPage,
      });

    if(currentPage == 0 || paginationRange < 2){
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () =>{
        onPageChange(currentPage -1);
    }

    let lastPage = paginationRange[paginationRange.length - 1];
    //TODO figure out how css works here
    return (
        <ul
          className={classnames('pagination-container', { [className]: className })}
        >
           {/* Left navigation arrow */}
          <li
            className={classnames('pagination-item', {
              disabled: currentPage === 1
            })}
            onClick={onPrevious}
          >
            <div className="arrow left" />
          </li>
          {paginationRange.map(pageNumber => {
             
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              return <li className="pagination-item dots">&#8230;</li>;
            }
            
            // Render our Page Pills
            return (
              <li
                className={classnames('pagination-item', {
                  selected: pageNumber === currentPage
                })}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
          {/*  Right Navigation arrow */}
          <li
            className={classnames('pagination-item', {
              disabled: currentPage === lastPage
            })}
            onClick={onNext}
          >
            <div className="arrow right" />
          </li>
        </ul>
      );
    

}