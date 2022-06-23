const Sidebar = () => {
  return (
    <div>
      <div className="layout__side">
        <img className="img--logo--small" alt="Logo-small" />
        <button className="btn btn--primary btn--s flex">
          <i className="icon icon--base icon--add icon--white ml--16"></i>
          <div className="ml--19">Add product</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
