function Head() {
    const navStyle = {
      backgroundColor: "#282c34",
      padding: "1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  
    const ulStyle = {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      gap: "2rem",
    };
  
    const liStyle = {
      color: "#ffffff",
      fontSize: "1.2rem",
      cursor: "pointer",
      transition: "color 0.3s ease",
    };
  
    const liHoverStyle = {
      color: "#61dafb",
    };
  
    return (
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li
            style={liStyle}
            onMouseOver={(e) => (e.target.style.color = liHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = liStyle.color)}
          >
            Home
          </li>
          <li
            style={liStyle}
            onMouseOver={(e) => (e.target.style.color = liHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = liStyle.color)}
          >
            About
          </li>
          <li
            style={liStyle}
            onMouseOver={(e) => (e.target.style.color = liHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = liStyle.color)}
          >
            Services
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Head;
  