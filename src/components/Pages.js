export default function Pagination({ pages, setPages }) {

    const pageRange = num => num ? [...Array(num + 1).keys()].slice(1) : [];

    const changePage = e => {
        let nextPage;

        switch (e.target.textContent) {
            case "Previous":
                nextPage = pages.current - 1;
                break;
            case "Next":
                nextPage = pages.current + 1;
                break;
            default:
                nextPage = Number(e.target.textContent);
                break;
        }

        if (nextPage >= 1 && nextPage <= pages.total) {
            setPages({ ...pages, current: nextPage });
        }
    };

    return (
        <div className="d-flex justify-content-center">
            <div class="d-flex justify-content-center align-items-center w-75">
                <ul className="pagination overflow-x-auto">
                    <PageButton handler={changePage} text="Previous" />
                    <div className="d-flex">
                        {pageRange(pages.total).map(page => {
                            return <PageButton
                                key={page} handler={changePage} text={page}
                                active={page === pages.current} />
                        })}
                    </div>
                    <PageButton handler={changePage} text="Next" />
                </ul>
            </div>
        </div>
    )
}

function PageButton({ handler, text, active }) {
    return (
        <li className={`page-item ${active && "active"}`}>
            <button onClick={handler} className="page-link">{text}</button>
        </li>
    )
}
