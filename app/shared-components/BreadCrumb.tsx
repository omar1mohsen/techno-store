import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";

const Breadcrumb = ({ crumbs } : any) => {
  return (
    <nav aria-label="breadcrumb">
        <div className='container'>
            <ul className="tes-breadcrumb-list">
                {crumbs.map((crumb : any, index :number) => (
                <li key={`breadcrumb_${index}`} className={`tes-breadcrumb-item${index === crumbs.length - 1 ? ' active' : ''}`}>
                    {index === crumbs.length - 1 ? (
                        <span className='tes-active-bread' >
                            {crumb.title}
                        </span>
                    ) : (
                    <Link className='tes-bread-link' href={crumb.path}>
                        <span>{crumb.title}</span>
                        <IoIosArrowBack/>
                    </Link>
                    )}
                </li>
                ))}
            </ul>
        </div>
    </nav>
  );
};

export default Breadcrumb;