import { useRouter } from "next/router";

function Pagination({ page, numberOfNfts }) {
  const router = useRouter();
  const pagination = () => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(numberOfNfts / 12); i++) {
      pages.push(i);
    }
    return pages;
  };
  const lastPage = Math.ceil(numberOfNfts / 12);
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      <button
        onClick={() => router.push(`/collection?page=${page - 1}`)}
        disabled={page <= 1}
        className="bg-gray text-white h-12 w-12 text-xl rounded-lg mr-5 flex items-center justify-center disabled:bg-gray/20 disabled:cursor-not-allowed !mx-auto"
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 7L7 1"
            stroke="#FAF9F9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* Show previus page mobile */}
      {page > 1 && (
        <button
          onClick={() => router.push(`/collection?page=${page - 1}`)}
          disabled={page <= 1}
          className="bg-gray text-white h-12 w-12 text-xl rounded-lg mr-5 flex items-center justify-center disabled:bg-gray/20 disabled:cursor-not-allowed !mx-auto md:hidden"
        >
          {page - 1}
        </button>
      )}
      {pagination().map((page) => (
        <button
          key={page}
          onClick={() => router.push(`/collection?page=${page}`)}
          className={
            (page === Number(router.query.page)
              ? "bg-primary text-dark h-12 w-12 text-xl rounded-lg mr-5 neon !mx-auto"
              : "") ||
            (router.asPath === "/collection" && page === 1
              ? "bg-primary text-dark h-12 w-12 text-xl rounded-lg mr-5 neon !mx-auto"
              : "bg-gray text-white h-12 w-12 text-xl rounded-lg mr-5 !mx-auto hidden md:block")
          }
        >
          {page}
        </button>
      ))}
      {/* Show next page mobile */}
      {page < lastPage && (
        <button
          onClick={() => router.push(`/collection?page=${page + 1}`)}
          className="bg-gray text-white h-12 w-12 text-xl rounded-lg mr-5 flex items-center justify-center disabled:bg-gray/20 disabled:cursor-not-allowed !mx-auto md:hidden"
        >
          {page + 1}
        </button>
      )}
      <button
        onClick={() => router.push(`/collection?page=${page + 1}`)}
        disabled={page >= lastPage}
        className="bg-gray text-white h-12 w-12 text-xl rounded-lg mr-5 flex items-center justify-center disabled:bg-gray/20 disabled:cursor-not-allowed !mx-auto"
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="#FAF9F9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
