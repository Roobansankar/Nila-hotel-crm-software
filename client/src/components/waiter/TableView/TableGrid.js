// const TableGrid = ({ tables, tableStatuses, handleClick }) => {
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "running":
//         return "blue";
//       case "placed":
//         return "green";
//       case "paid":
//         return "yellow";
//       default:
//         return "";
//     }
//   };

//   const isClickable = (status) => {
//     // Only allow click if status is not running or placed
//     return !(status === "running" || status === "placed");
//   };

//   return (
//     <div className="table-grid">
//       {tables.map((id) => {
//         const status = tableStatuses[id];
//         return (
//           <div
//             key={id}
//             className={`table-box ${getStatusColor(status)} ${
//               !isClickable(status)
//                 ? "cursor-not-allowed opacity-50"
//                 : "cursor-pointer"
//             }`}
//             onClick={() => {
//               if (isClickable(status)) handleClick(id);
//             }}
//           >
//             {id}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default TableGrid;
const TableGrid = ({ tables, tableStatuses, handleClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "running":
        return "blue";
      case "placed":
        return "green";
      case "paid":
        return "yellow";
      default:
        return "";
    }
  };

  return (
    <div className="table-grid">
      {tables.map((id) => {
        const status = tableStatuses[id];
        return (
          <div
            key={id}
            className={`table-box ${getStatusColor(status)} cursor-pointer`}
            onClick={() => handleClick(id)}
          >
            {id}
          </div>
        );
      })}
    </div>
  );
};

export default TableGrid;
