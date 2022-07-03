interface Props {
  currentPage: number;
  rpp: number;
  productsCount: number;
  handlePaginate: (number: number) => void;
}

const Pagination: React.FC<Props> = (props) => {
  const { currentPage, rpp, productsCount, handlePaginate } = props;

  const pageNumbers = [];
  const totalPages = Math.ceil(productsCount / rpp);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <i
        className="icon icon--base icon--previous"
        onClick={() =>
          currentPage === 1 ? undefined : handlePaginate(currentPage - 1)
        }
      ></i>

      {pageNumbers.map((n, index) => (
        <i
          key={index}
          onClick={() => handlePaginate(n)}
          className={` icon icon--base icon--${n}`}
        ></i>
      ))}
      <i
        className="icon icon--base icon--next"
        onClick={() =>
          currentPage === 2 ? undefined : handlePaginate(currentPage + 1)
        }
      ></i>
    </div>
  );
};

export default Pagination;
