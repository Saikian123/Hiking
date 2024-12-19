// Child.js


// eslint-disable-next-line react/prop-types
const Children7 = ({ name, email }) => {
  return (
    <div>
      <h2>Child Component</h2>
      {name || email ? (
        <>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default Children7;
