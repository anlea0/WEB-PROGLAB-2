function Student(props) {
  return (
    <div>
        <h3>Exercise 2: Passing Props (Name Card)</h3>
        <h2>Name: {props.name}</h2>
        <h2>Class: {props.className}</h2>
        <hr></hr>
    </div>
  );
}

export default Student;