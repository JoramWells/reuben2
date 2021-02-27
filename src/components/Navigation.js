import {Link} from 'react-router-dom'
export default function Navigation() {
  return (
    <div
      style={{
        color: "white",
        width: "75%",
        backgroundColor: "grey",

        borderRadius: "2px",
        padding: "5px",
        margin: "auto",
        display: "block",
        zIndex:1,
      }}
    >
      <div>
        <ol style={{ display: "flex", justifyContent: "space-between" }}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          {/* <li>
            <InputGroup size="md">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-lg"
              />
            </InputGroup>
          </li> */}
          <li>SignOut</li>
          <li>Login</li>
        </ol>
      </div>
    </div>
  );
}
